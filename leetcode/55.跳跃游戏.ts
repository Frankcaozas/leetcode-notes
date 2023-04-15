/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  
  let n = nums.length
  let  rightmost = 0
  for(let i=0; i<n; i++)
      if (i <= rightmost)
          rightmost = Math.max(rightmost, i + nums[i])
          if (rightmost >= n - 1)
              return true
  return false

new PriorityQueue
};
// @lc code=end

