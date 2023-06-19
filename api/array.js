function flat(arr, depth = 1) {
  if (depth === 0) return arr
  return arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(flat(arr, depth - 1)) ? flat : cur),
    []
  )
}

console.log(flat([1, [12, 31], 1, 231, [1, [123, [1]]]], 2))
console.log(flat([1, [12, 31], 1, 231, [1, [123]]], 1))
new Array().reduce

// const reduce = (arr, fn, init) => {
//   const idx = init ? 0 : 1
//   let sum = init ? init : arr[0]
//   for(let i=idx; i<arr.length; i++){
//     sum = fn(sum, arr[i], i)
//   }
//   return sum
// }

function reduce(arr, fn, ...initial) {
  let idx = initial.length ? 0:1
  let sum = initial.length ? initial : arr[0]
  for(let i=idx; i<arr.length; i++){
    sum = fn(sum, arr[i], idx, arr)
  }
  return sum
}
// console.log(reduce([1,2,3,4,5,6], (a, b)=>a+b, 0))
// console.log(reduce([1,2,3,4,5,6], (a, b)=>a+b))
