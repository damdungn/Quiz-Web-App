// A lightweight, dependency-free confetti burst: scatters a handful of
// small colored pieces out from an anchor element and lets a CSS
// animation carry them away, then removes them. No canvas, no library —
// just a few DOM nodes with randomized trajectories.
const COLORS = ['#6b8e6b', '#d9a441', '#c1653d', '#5b8fa8', '#8fb37b']
const PIECE_COUNT = 16
const DURATION_MS = 700

export function burstConfetti(anchorElement) {
  const rect = anchorElement.getBoundingClientRect()

  const container = document.createElement('div')
  container.className = 'confetti-burst'
  container.style.left = `${rect.left + rect.width / 2}px`
  container.style.top = `${rect.top + rect.height / 2}px`

  for (let i = 0; i < PIECE_COUNT; i++) {
    const piece = document.createElement('span')
    piece.className = 'confetti-piece'
    const angle = Math.random() * Math.PI * 2
    const distance = 50 + Math.random() * 50
    piece.style.setProperty('--dx', `${Math.cos(angle) * distance}px`)
    piece.style.setProperty('--dy', `${Math.sin(angle) * distance}px`)
    piece.style.setProperty('--rot', `${(Math.random() - 0.5) * 720}deg`)
    piece.style.background = COLORS[i % COLORS.length]
    piece.style.animationDelay = `${Math.random() * 60}ms`
    container.appendChild(piece)
  }

  document.body.appendChild(container)
  setTimeout(() => container.remove(), DURATION_MS + 100)
}
