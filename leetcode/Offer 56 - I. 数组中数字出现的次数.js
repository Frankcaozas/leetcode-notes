const x = 3
const y = 5
const n = 3 ^ 5
let m = 1
while ((m & n) === 0) {
  m <<= 1
}
console.log('m', m)
console.log('m & x', m & x)
console.log('m & y', m & y)
