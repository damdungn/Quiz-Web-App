import './style.css'
import { categories } from './questions.js'
import { createQuiz } from './quiz.js'
import { startTimer } from './timer.js'
import { burstConfetti } from './confetti.js'

// The category names, in the order they're offered — each maps to a
// fixed pool of exactly 10 questions in questions.js.
const CATEGORY_NAMES = Object.keys(categories)

// Per-difficulty countdown duration, in seconds. Chosen once on the
// difficulty-select screen (which follows category selection) and reused
// as the timer's `seconds` prop for every question in the session — it
// only affects the time limit, never which questions are used or how
// answers are scored.
const DIFFICULTIES = [
  { id: 'easy', label: 'Easy', seconds: 20 },
  { id: 'medium', label: 'Medium', seconds: 15 },
  { id: 'hard', label: 'Hard', seconds: 10 },
]

// selectAnswer(-1) means "no option was picked" — -1 never matches a
// real option index (0-3), so quiz.answer() scores it as incorrect,
// same as any other wrong pick.
const TIMED_OUT = -1

// How long the correct/wrong flash (and confetti, on a correct answer)
// gets to play before the next question replaces the DOM. Scoring, the
// streak, and the countdown all stop the instant an answer is given —
// this delay only holds back the *visible* transition to the next
// question, it doesn't pause or re-run any timer/scoring logic.
const FEEDBACK_DELAY_MS = 800

const app = document.querySelector('#app')

// The active quiz instance. It's created fresh for each session, once a
// category has been chosen — the question pool is fixed at creation time,
// so picking a (possibly different) category on "Play Again" needs a new
// instance rather than resetting the old one.
let quiz = null

// The chosen category's display name, set once on the category-select
// screen and left unchanged for the rest of the session — shown in the
// header throughout the quiz.
let selectedCategory = null

// The duration for the question timer, set once on the difficulty-select
// screen (which follows category selection) and left unchanged for the
// rest of the session.
let questionSeconds = null

// Only one countdown should ever be running at a time. Every render tears
// down whatever timer the previous question (or previous render) left
// behind before anything new is drawn or started.
let stopTimer = null

function clearTimer() {
  if (stopTimer) {
    stopTimer()
    stopTimer = null
  }
}

// Same idea for the "show feedback, then advance" delay: at most one of
// these should ever be pending.
let advanceTimeoutId = null

function clearAdvanceTimeout() {
  if (advanceTimeoutId !== null) {
    clearTimeout(advanceTimeoutId)
    advanceTimeoutId = null
  }
}

function render() {
  clearTimer()
  clearAdvanceTimeout()
  if (quiz.isComplete()) {
    renderComplete()
    return
  }
  renderQuestion(quiz.getCurrentQuestion(), quiz.getCurrentIndex())
}

function renderCategorySelect() {
  clearTimer()
  clearAdvanceTimeout()
  app.innerHTML = `
    <main class="quiz">
      <h1 class="quiz-question">Choose a category</h1>
      <p class="quiz-subtitle">
        You'll pick a difficulty (timer length) next — the category only
        decides which 10 questions you get.
      </p>
      <div class="quiz-options">
        ${CATEGORY_NAMES.map(
          (name) => `
            <button class="quiz-option quiz-option-stacked" type="button" data-category="${name}">
              <span class="quiz-option-title">${name}</span>
              <span class="quiz-option-meta">10 questions</span>
            </button>
          `,
        ).join('')}
      </div>
    </main>
  `

  app.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category
      quiz = createQuiz(categories[selectedCategory])
      renderDifficultySelect()
    })
  })
}

function renderDifficultySelect() {
  clearTimer()
  clearAdvanceTimeout()
  app.innerHTML = `
    <main class="quiz">
      <h1 class="quiz-question">Choose a difficulty</h1>
      <p class="quiz-subtitle">
        Category: <strong>${selectedCategory}</strong>. This only changes
        how long you get per question — the questions and scoring stay
        the same.
      </p>
      <div class="quiz-options">
        ${DIFFICULTIES.map(
          (difficulty) => `
            <button class="quiz-option quiz-option-stacked" type="button" data-difficulty="${difficulty.id}">
              <span class="quiz-option-title">${difficulty.label}</span>
              <span class="quiz-option-meta">${difficulty.seconds}s per question</span>
            </button>
          `,
        ).join('')}
      </div>
    </main>
  `

  app.querySelectorAll('[data-difficulty]').forEach((button) => {
    button.addEventListener('click', () => {
      const difficulty = DIFFICULTIES.find((d) => d.id === button.dataset.difficulty)
      questionSeconds = difficulty.seconds
      render()
    })
  })
}

function renderQuestion(question, index) {
  app.innerHTML = `
    <main class="quiz">
      <div class="quiz-status">
        <div class="quiz-header">
          <div class="quiz-header-left">
            <p class="quiz-category">${selectedCategory}</p>
            <p class="quiz-progress">Question ${index + 1} of ${quiz.getTotalQuestions()}</p>
          </div>
          <div class="quiz-stats">
            <p class="quiz-score">Score: ${quiz.getScore()}</p>
            <p class="quiz-streak">🔥 ${quiz.getStreak()} streak — ${quiz.getMultiplier()}x</p>
          </div>
        </div>
        <div class="quiz-timer-row">
          <div class="quiz-timer" role="timer">
            <div class="quiz-timer-bar"></div>
          </div>
          <p class="quiz-timer-label">${questionSeconds}s</p>
        </div>
      </div>
      <h1 class="quiz-question">${question.question}</h1>
      <div class="quiz-options">
        ${question.options
          .map(
            (option, optionIndex) => `
              <button class="quiz-option" type="button" data-index="${optionIndex}">
                ${option}
              </button>
            `,
          )
          .join('')}
      </div>
    </main>
  `

  const timerBar = app.querySelector('.quiz-timer-bar')
  const timerLabel = app.querySelector('.quiz-timer-label')
  const optionsContainer = app.querySelector('.quiz-options')
  const optionButtons = Array.from(app.querySelectorAll('.quiz-option'))
  let answered = false

  // Shared by both the click handlers and the timeout below, guarded by
  // `answered` so a click that arrives the same tick the timer hits zero
  // can't score twice or advance twice.
  function selectAnswer(selectedIndex) {
    if (answered) return
    answered = true
    clearTimer()

    // Scoring/streak happen immediately, same as before — only the
    // *visible* move to the next question is held back, to give the
    // flash/shake/confetti feedback room to play.
    showAnswerFeedback(selectedIndex, question.correctIndex, optionButtons)
    optionsContainer.classList.add('quiz-options-locked')
    quiz.answer(selectedIndex)

    clearAdvanceTimeout()
    advanceTimeoutId = setTimeout(() => {
      advanceTimeoutId = null
      render()
    }, FEEDBACK_DELAY_MS)
  }

  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectAnswer(Number(button.dataset.index))
    })
  })

  stopTimer = startTimer(questionSeconds, {
    onTick(remaining, total) {
      timerLabel.textContent = `${remaining}s`
      timerBar.style.width = `${Math.max((remaining / total) * 100, 0)}%`
    },
    onExpire() {
      selectAnswer(TIMED_OUT)
    },
  })
}

// Flags the selected button (and, on a wrong answer, the correct one
// too) with a CSS class that drives the flash/shake keyframes, and fires
// the confetti burst for a correct pick. Purely visual — doesn't touch
// quiz state.
function showAnswerFeedback(selectedIndex, correctIndex, optionButtons) {
  const isCorrect = selectedIndex === correctIndex
  if (isCorrect) {
    const button = optionButtons[selectedIndex]
    button.classList.add('quiz-option-correct')
    burstConfetti(button)
  } else {
    if (selectedIndex !== TIMED_OUT) {
      optionButtons[selectedIndex].classList.add('quiz-option-wrong')
    }
    optionButtons[correctIndex].classList.add('quiz-option-correct')
  }
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`
}

// "20 / 20" once the bonus is zero, or "20 / 20 + 14 pts bonus" once the
// streak multiplier has added points on top of the raw correct count.
function formatFinalScore(correctCount, total, bonusPoints) {
  const base = `${correctCount} / ${total}`
  return bonusPoints > 0 ? `${base} + ${bonusPoints} pts bonus` : base
}

function renderComplete() {
  const total = quiz.getTotalQuestions()
  const correctCount = quiz.getCorrectCount()
  const bonusPoints = quiz.getBonusPoints()
  // Accuracy reflects how many questions were actually answered
  // correctly — it's not affected by the streak multiplier's bonus
  // points, unlike the final score display below.
  const accuracy = Math.round((correctCount / total) * 100)

  app.innerHTML = `
    <main class="quiz">
      <h1 class="quiz-question">Quiz complete!</h1>
      <div class="quiz-results">
        <div class="quiz-result quiz-result-primary">
          <p class="quiz-result-value">${formatFinalScore(correctCount, total, bonusPoints)}</p>
          <p class="quiz-result-label">Final score</p>
        </div>
        <div class="quiz-results-secondary">
          <div class="quiz-result">
            <p class="quiz-result-value">${accuracy}%</p>
            <p class="quiz-result-label">Accuracy</p>
          </div>
          <div class="quiz-result">
            <p class="quiz-result-value">${formatDuration(quiz.getElapsedSeconds())}</p>
            <p class="quiz-result-label">Total time</p>
          </div>
        </div>
      </div>
      <button class="quiz-play-again" type="button">Play Again</button>
    </main>
  `

  app.querySelector('.quiz-play-again').addEventListener('click', () => {
    quiz = null
    selectedCategory = null
    questionSeconds = null
    renderCategorySelect()
  })
}

renderCategorySelect()
