/*
 * @lc app=leetcode.cn id=940 lang=typescript
 *
 * [940] 不同的子序列 II
 */

// @lc code=start
function distinctSubseqII(s: string): number {
  //1.d[i] 和 d[i-1] 之间有什么关系？
  //  dp[i] = dp[i - 1] + newCount - repeatCount
  //2.newCount 如何计算？
  // 子集个数为2^n，所以 newCount = dp[i-1]
  //3.repeatCount如何计算？
  // 以字符串“abcb”为例，dp[2] - dp[1] 是引入第一个'b'新增的子串个数，
  // 那么当引入第二个‘b’的时候重复子串个数也为 dp[2] - dp[1]
  //abcb
  // ''
  //  a
  //  b ab 
  //  c ac bc abc 
  //  b ab bb abb cb acb bcb abcb
  const n = s.length
  const MOD = 1000000007
  const repeat = new Array(26).fill(0)
  let ans = 1
  // repeat[s.charCodeAt(0)-'a'.charCodeAt(0)] = 1
  for (let i = 0; i < n; i++) {
    const idx = s.charCodeAt(i) - 'a'.charCodeAt(0)
    const repeatNum = ans % MOD
    ans = (((ans * 2 - repeat[idx]) % MOD) + MOD) % MOD
    repeat[idx] = repeatNum
  }
  return ((ans - 1)+MOD)%MOD
}
// @lc code=end
