/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
//
// function findKthLargest(nums: number[], k: number): number {
//   heapSort(nums)
//   console.log(nums);
//   return nums[nums.length-k]
// }

// function swap(nums: number[], a: number, b: number) {
//   const temp = nums[a]
//   nums[a] = nums[b]
//   nums[b] = temp
// }
// function heapify(nums: number[], start: number, end: number) {
//   let father = start
//   let child = father * 2 + 1
//   if (child > end) return
//   if (child + 1 <= end && nums[child] < nums[child + 1]) child++
//   if (nums[father] < nums[child]) {
//     swap(nums, father, child)
//     heapify(nums, child, child * 2 + 1)
//   }
// }

// function heapSort(nums: number[]){
//   const n = nums.length
//   for(let i=Math.floor(n/2 -1); i>=0; i--){
//     heapify(nums, i, n-1)
//   } 
//   for(let i=0; i<n;i++){
//     swap(nums,i,n-1-i)
//     heapify(nums, 0, n-2-i)
//   }
// }
// @lc code=end
//2.快速排序
function findKthLargest(nums: number[], k: number): number {
  return quikSlect(nums, 0, nums.length-1, nums.length-k)
};

function quikSlect(nums: number[], left: number, right: number, index: number){
  const pivot = randomPartion(nums, left, right)
  console.log(nums);
  console.log(pivot)
  if(pivot === index){
    return nums[pivot]
  }else if(pivot<index){
    return quikSlect(nums, pivot+1, right, index)
  }else{
    return quikSlect(nums, left, pivot-1, index)
  }
}

function swap(arr: number[], a: number, b: number) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function partion(nums: number[], left: number, right: number) {
  let i = left-1
  const pivot = nums[right]
  for (let j = left; j < right ; j++) {
    if (nums[j] < pivot) {
      i++
      swap(nums, i, j)
    }
  }
  swap(nums, i+1, right)
  return i+1
}

function randomPartion(nums: number[], left: number, right: number) {
  const random = Math.floor(Math.random() * (right - left+1) +left)
  swap(nums, random, right)
  return partion(nums, left, right)
}
const numbers = [3,2,1,5,6,4]

