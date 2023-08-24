function nth(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return n * nth(n - 1)
}

console.log(nth(2))
console.log(nth(5))
