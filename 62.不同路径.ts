/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const dp = new Array(m)
  for(let i=0; i<m; i++){
    dp[i] = new Array(n).fill(0)
  }
  dp[0][0] = 1
  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
      if(i===0 && j=== 0) continue
      if(i-1>=0){
        dp[i][j] += dp[i-1][j]
      }
      if(j-1>=0){
        dp[i][j] += dp[i][j-1]
      }
    }
  }
  return dp[m-1][n-1]
};

const res = uniquePaths(3,7)
// @lc code=end

