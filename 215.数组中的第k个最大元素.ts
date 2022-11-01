/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  heapSort(nums)
  console.log(nums);
  return nums[nums.length-k]
}

function swap(nums: number[], a: number, b: number) {
  const temp = nums[a]
  nums[a] = nums[b]
  nums[b] = temp
}
function heapify(nums: number[], start: number, end: number) {
  let father = start
  let child = father * 2 + 1
  if (child > end) return
  if (child + 1 <= end && nums[child] < nums[child + 1]) child++
  if (nums[father] < nums[child]) {
    swap(nums, father, child)
    heapify(nums, child, child * 2 + 1)
  }
}

function heapSort(nums: number[]){
  const n = nums.length
  for(let i=Math.floor(n/2 -1); i>=0; i--){
    heapify(nums, i, n-1)
  } 
  for(let i=0; i<n;i++){
    swap(nums,i,n-1-i)
    heapify(nums, 0, n-2-i)
  }
}
// @lc code=end
