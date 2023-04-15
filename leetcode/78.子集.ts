/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const set: number[] = []
  const ans: number[][] = [[]]
  const backtrack = (index: number) => {
    if (index >= nums.length) return
    for (let i = index; i < nums.length; i++) {
        set.push(nums[i])
        ans.push([...set])
        backtrack(i+1)
        set.pop()
    }
  }
  backtrack(0)
  return ans
};
// @lc code=end

