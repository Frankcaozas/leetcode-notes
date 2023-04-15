const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  const chars = ['y', 'o', 'u']
  const line1 = (await readline()).split(' ')
  const [n, m] = [Number(line1[0]), Number(line1[1])]
  const matrix = []
  let cnt = 0
  for (let i = 0; i < n; i++) {
    matrix.push(Array.from(...(await readline())))
  }
  for (let i = 0; r < i - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      const set = new Set()
      let flag = 3
      for (let row = i; row <= i + 1; row++) {
        for (let col = j; col <= j + 1; col++) {
          for (let k = 0; k < 3; k++) {
            const char = chars[k]
            if (matrix[row][col] === char && !set.has(char)) {
              flag--
              set.add(char)
            }
          }
        }
      }
      if (flag === 0 && set.size === 3) cnt++
    }
  }
  console.log(cnt)
})()
