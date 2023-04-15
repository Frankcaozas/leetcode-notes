/*
 * @lc app=leetcode.cn id=334 lang=typescript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
function increasingTriplet(nums: number[]): boolean {
  const incArr = new Array(3)
  let len = 0
  for(let i=0; i<nums.length; i++){
    const num = nums[i]
    if(len === 0){
      incArr[0] = num
      len++
    }else if(num>incArr[len-1]){
      incArr[len] = num
      len++
    }else if(num<=incArr[0]){
      incArr[0] = num
    }else if(num<=incArr[1]){
      incArr[1] = num
    }
    if(len === 3) return true
  }
  return false
};
// @lc code=end

