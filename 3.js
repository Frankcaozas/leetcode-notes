const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  const n = Number(await readline())
  let str = '1'
  const ais = (await readline()).split(' ').map((val) => Number(val))
  for (let i = 0; i < n; i++) {
    const c = (i + 1) % 2 === 0 ? '0' : '1'
    for(let j=0; j++; )
    str += c * ais[i]
  }
  str = Array.from(str)
  let cnt = 0
  for(let i=0; i<str.length; i++){
    for(let j=i; j<str.length; j++){
      const [l, r] = expand(i, j)
      if(l===i && r===j) cnt++
    }
  }
  function expand(l, r){
    while(l>=0 && r<str.length && str[l]===str[r]){
      l--
      r++
    }
    return [l+1, r-1]
  }
  console.log(str, cnt)
})()
