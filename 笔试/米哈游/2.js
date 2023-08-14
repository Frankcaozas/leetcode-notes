const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  const [n, m] = (await readline()).split(' ').map(Number)
  const mi = (await readline()).split(' ').map(Number)
  const yuexia = (await readline()).split(' ').map(Number)
  const aotuo = (await readline()).split(' ').map(Number)
  console.log(n, m, mi, yuexia, aotuo)

  //left bottom [1,1] right top [n,m]

  let first = 0

  const direct = (p1, p2) => {
    let res = 0
    res = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
    return res
  }
  
  const indirect = (p1, p2) => {
    let res = 0
    let largeY = Math.max(p1[1], p2[1])
    let smallY = Math.min(p1[1], p2[1])
    let largeX = Math.max(p1[0], p2[0])
    let smallX = Math.min(p1[0], p2[0])
    res += smallY + m - largeY + smallX + n - largeX
    return res
  }
  /**
   *
   * @param {[number, number]} p1
   * @param {[number, number]} p2
   */
  const walk = (p1, p2)=>{
    let res = 0
    let largeY = Math.max(p1[1], p2[1])
    let smallY = Math.min(p1[1], p2[1])
    let largeX = Math.max(p1[0], p2[0])
    let smallX = Math.min(p1[0], p2[0])
    let dirx = Math.abs(p1[0] - p2[0])
    let diry = Math.abs(p1[1] - p2[1])
    let inx = smallY + m - largeY
    let iny = smallX + n - largeX
    res += Math.min(dirx, inx) + Math.min(diry, iny)
    return res
  }
  console.log(walk(mi, yuexia))
  console.log(walk(aotuo, yuexia))
  // const direct = Math.abs(yuexia[0]-mi[0]) + Math.abs(yuexia[1]-mi[1])
  // const indirect = Math.min( yuexia )+ Math.abs(yuexia[1]-mi[1])
  // if(yuexia[0] )
})()
