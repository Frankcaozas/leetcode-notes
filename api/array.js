function flat(arr, depth=1){
  if(depth<=0) return arr
  return arr.reduce((sum, next)=>sum.concat(Array.isArray(next)? flat(next, depth-1):next),[])
}
console.log(flat([1, [12, 31], 1, 231, [1, [123,[1]]]], 2))
console.log(flat([1, [12, 31], 1, 231, [1, [123]]], 1))
new Array().flat

const reduce = (arr, fn, init) => {
  const idx = init ? 0 : 1
  let sum = init ? init : arr[0] 
  for(let i=idx; i<arr.length; i++){
    sum = fn(sum, arr[i], i)
  }
  return sum
}

// console.log(reduce([1,2,3,4,5,6], (a, b)=>a+b, 0))
// console.log(reduce([1,2,3,4,5,6], (a, b)=>a+b))


