// A small reusable countdown "component": runs a per-question timer for a
// given duration and reports ticks/expiry via callbacks, with no
// knowledge of quiz scoring or specific DOM elements. `seconds` is a
// prop, not a hardcoded value, so callers (e.g. per-difficulty timing)
// can vary it per use.
export function startTimer(seconds, { onTick, onExpire }) {
  let remaining = seconds

  const intervalId = setInterval(() => {
    remaining -= 1
    onTick(Math.max(remaining, 0), seconds)
    if (remaining <= 0) {
      stop()
      onExpire()
    }
  }, 1000)

  function stop() {
    clearInterval(intervalId)
  }

  return stop
}
