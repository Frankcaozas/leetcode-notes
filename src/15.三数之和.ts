/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const threeSumRes: number[][] = []
  const sorted = nums.sort((a,b)=> a-b)
  for(let i=0; i<nums.length; i++){
    const a = sorted[i]
    let left = i+1 
    let right = nums.length-1
    while(right>left){
      if(sorted[left]===sorted[left-1] || (right<nums.length-1 && sorted[right]===sorted[right+1])) continue
      if(a+sorted[left]+sorted[right]===0){
        threeSumRes.push([a,sorted[left],sorted[right]])
      }
      Object.is
    }
  }
  return threeSumRes
}
// @lc code=end
