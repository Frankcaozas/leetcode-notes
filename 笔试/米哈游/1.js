const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  const n = parseInt(await readline())
  const arr = (await readline()).split(' ').map((v) => v.split('').map(Number))
  console.log(n, arr)
  let zeroCnt = 0
  let cnt = 0
  for (const cur of arr) {
    const [a, b] = cur
    if (a === 0) {
      zeroCnt++
    }
    if (b === 0) {
      zeroCnt++
    }
    if (zeroCnt >= 4) {
      cnt++
      zeroCnt = 0
    }
  }
  console.log(cnt)
})()
