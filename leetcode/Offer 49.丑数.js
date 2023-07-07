function nthUglyNumber(n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  let p1 = 1,
    p2 = 1,
    p3 = 1
  for (let i = 2; i <= n; i++) {
    const n1 = dp[p1] * 2,
      n2 = dp[p2] * 3,
      n3 = dp[p3] * 5
    dp[i] = Math.min(Math.min(n1, n2), n3)
    if (dp[i] === n1) p1++   
    if (dp[i] === n2) p2++
    if (dp[i] === n3) p3++
    //都是if 删除重复的

  }

  return dp[n]
}

console.log(nthUglyNumber(10))
