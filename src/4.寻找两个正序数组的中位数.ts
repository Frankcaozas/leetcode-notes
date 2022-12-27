/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // [1,2,7] [3,4,6] [1,2,3,4,6,7]
  nums1.push(...nums2)
  nums1.sort()
  const len = nums1.length
  if(nums1.length%2 === 0){
    return (nums1[len/2-1]+nums1[len/2])/2
  }else{
    return nums1[Math.floor(len/2)]
  }

};
// @lc code=end

