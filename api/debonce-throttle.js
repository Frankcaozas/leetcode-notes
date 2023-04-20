function debonce(fn, t) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, t)
  }
}

function throttle(fn, t) {
  let timer
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn(...args)
      clearTimeout(timer)
    }, t)
  }
}
