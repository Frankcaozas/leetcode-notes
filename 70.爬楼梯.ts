/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const dp: number[] = new Array(n)
  dp[0] = 1
  for(let i=1; i<n; i++){
    if(i+1-2 > 0){
      dp[i] = dp[i-1] + dp[i-2]
    }else{
      dp[i] = dp[i-1] + 1
    }
  }
  return dp[n-1]
};
// @lc code=end


