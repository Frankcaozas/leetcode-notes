const flatt = function (arr, depth) {
  if (depth === 0) return arr
  return arr.reduce(
    (sum, cur) => sum.concat(Array.isArray(cur) ? flatt(cur, depth - 1) : cur),
    []
  )
}
// console.log(flatt([1, [12, 31], 1, 231, [1, [123]]], 2))
// console.log(flatt([1, [12, 31], 1, 231, [1, [123]]], 1))


const reduce = (arr, fn, init) => {
  const idx = init ? 0 : 1
  let sum = init ? init : arr[0] 
  for(let i=idx; i<arr.length; i++){
    sum = fn(sum, arr[i], i)
  }
  return sum
}

console.log(reduce([1,2,3,4,5,6], (a, b)=>a+b, 0))
console.log(reduce([1,2,3,4,5,6], (a, b)=>a+b))


