function curry(fn, ...args) {
  //fn.length 参数的个数
  return fn.length <= args.length ? fn(...args) : curry.bind(null,fn, ...args)
}
// function curry(fn, ...args) {
//   return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }
function sum(a, b, c) {
  return a+b+c
}
const f =  curry(sum)
console.log(f(1)(2)(3));
console.log(f(1, 2)(4));
