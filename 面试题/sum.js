// function sum() {
//   sum.arr = Array.from(arguments)

//   function innerSum() {
//     sum.arr = sum.arr.concat(Array.from(arguments))
//     return innerSum
//   }

//   innerSum.sumOf = function () {
//     return sum.arr.reduce((acc, val) => acc + val, 0)
//   }
//   return innerSum
// }

function sum(...args) {
  const num = args.reduce((p, c) => p + c, 0)
  const fn = (...args) => {
    return sum(num, ...args)
  }
  fn.sumOf = () => num
  return fn
}

// 示例用法
console.log(sum(1, 2, 3).sumOf()) // 6
console.log(sum(2, 3)(2).sumOf()) // 7
console.log(sum(1)(2)(3)(4).sumOf()) // 10
console.log(sum(2)(4, 1)(2).sumOf()) // 9
