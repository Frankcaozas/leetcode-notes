/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if(nums1.length > nums2.length) 
    return intersect(nums2,nums1)
  const map = new Map()
  nums1.forEach( (num)=> {
    if(!map.has(num)){
      map.set(num, 1)
    }else{
      map.set(num, map.get(num)+1)
    }
  })
  const intersection = []
  nums2.forEach((num) => {
    if(map.has(num)){
      intersection.push(num)
      map.set(num, map.get(num)-1)
      if(map.get(num) ===0 )
        map.delete(num)
    }
  })
  return intersection
  
};
console.log(intersect([4,9,5],[9,4,9,8,4]));

// @lc code=end

