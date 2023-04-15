const flatt = function (arr, depth) {
  if (depth === 0) return arr
  return arr.reduce(
    (sum, cur) => sum.concat(Array.isArray(cur) ? flatt(cur, depth - 1) : cur),
    []
  )
}

// console.log(flatt([1, [12, 31], 1, 231, [1, [123]]], 2))
// console.log(flatt([1, [12, 31], 1, 231, [1, [123]]], 1))

