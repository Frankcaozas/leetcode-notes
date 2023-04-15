/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  const dp = Array(nums.length)
  dp.fill(0)
  let len = 0
  for (const num of nums) {
    let left = 0
    let right = len
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (num <= dp[mid]) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    dp[left] = num
    if (right === len) len++
  }
  return len
};
// @lc code=end

