// const reduce = (arr, fn, init) => {
//   const idx = init ? 0 : 1
//   let sum = init ? init : arr[0]
//   for(let i=idx; i<arr.length; i++){
//     sum = fn(sum, arr[i], i)
//   }
//   return sum
// }

function reduce(arr, fn, initial) {
  let sum = initial ? initial : arr[0]
  let start = initial ? 0 : 1
  for(let i=start; i<arr.length; i++){
    sum = fn(sum, arr[i], i, arr)
  }
  return sum
}

console.log(reduce([1,2,3,4,5,6], (a, b)=>a+b, 0))
console.log(reduce([1,2,3,4,5,6], (a, b)=>a+b))
/**
 *
 * @param {Array<any>} arr
 * @param {number} depth
 */
function flat1(arr, depth = 1) {
  if (depth === 0) return arr
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat1(cur, depth - 1) : cur)
  }, [])
}

// console.log(flat1([1, [12, 31], 1, 231, [1, [123, [1]]]], 2))
// console.log(flat1([1, [12, 31], 1, 231, [1, [123]]], 1))
