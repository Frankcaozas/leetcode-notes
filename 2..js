const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  const group = Number(await readline())
  //   console.log(group)
  for (let i = 0; i < group; i++) {
    const num = Number(await readline())
    //     console.log(num)
    const mid = num >> 1
    let ans = 0
    let pair
    for(let l=mid; l>=1; l--){
        const r = num-mid
        const maxD = getMaxD(l, r)
        ans = Math.max(maxD, ans)
        pair = [l, r]
    }
    console.log(pair);
  }

  function getMaxD(a, b){
    const minD = getMinD(a,b)
    return a*b / minD
  }
  function getMinD(a, b){
    const min = Math.min(a,b)
    const max =  Math.max(a,b)
    let res 
    for(let i=1; i<=min;  i++){
      if(min % i ===0 && max% i ===0 ) res = i
    }
    return res
  }
})()
