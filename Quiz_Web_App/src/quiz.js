const BASE_POINTS_PER_QUESTION = 1

// The point multiplier for the current streak of consecutive correct
// answers: 1x below 3, 2x from 3 up to (not including) 5, 3x from 5 on.
function multiplierForStreak(streak) {
  if (streak >= 5) return 3
  if (streak >= 3) return 2
  return 1
}

// Quiz game state/logic, kept separate from DOM rendering so each can be
// reasoned about independently. Tracks which question we're on, the
// running score, the current correct-answer streak, and the wall-clock
// time taken across the whole quiz.
export function createQuiz(questions) {
  let currentIndex = 0
  let score = 0
  let correctCount = 0
  let streak = 0
  let startTime = Date.now()
  let endTime = null

  function isComplete() {
    return currentIndex >= questions.length
  }

  return {
    getCurrentQuestion() {
      return questions[currentIndex]
    },
    getCurrentIndex() {
      return currentIndex
    },
    getTotalQuestions() {
      return questions.length
    },
    getScore() {
      return score
    },
    // Raw count of questions answered correctly — unlike getScore(),
    // this is never inflated by the streak multiplier. Accuracy should
    // be computed from this, not from the score.
    getCorrectCount() {
      return correctCount
    },
    // How many points the streak multiplier added on top of one point
    // per correct answer (score - correctCount).
    getBonusPoints() {
      return score - correctCount
    },
    getStreak() {
      return streak
    },
    // The multiplier currently in effect (applies to the next correct
    // answer), based on the streak as it stands right now.
    getMultiplier() {
      return multiplierForStreak(streak)
    },
    isComplete,
    // Total time from the quiz starting to the last question being
    // answered, in whole seconds. Keeps ticking (against "now") while the
    // quiz is still in progress, and freezes once it's complete.
    getElapsedSeconds() {
      const end = endTime ?? Date.now()
      return Math.round((end - startTime) / 1000)
    },
    // Scores the selected option against the current question's
    // correctIndex, then moves to the next question (or past the last
    // one, ending the quiz). A correct answer extends the streak and
    // awards the base points-per-question value multiplied by whatever
    // that streak is currently worth; any wrong answer (including a
    // timeout, which calls this with an index that can't match) resets
    // the streak to 0 immediately.
    answer(selectedIndex) {
      if (selectedIndex === questions[currentIndex].correctIndex) {
        correctCount += 1
        streak += 1
        score += BASE_POINTS_PER_QUESTION * multiplierForStreak(streak)
      } else {
        streak = 0
      }
      currentIndex += 1
      if (isComplete() && endTime === null) {
        endTime = Date.now()
      }
    },
  }
}
