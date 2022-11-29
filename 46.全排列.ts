/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start

//不用遍历的原因： 空间复杂度高
//回溯重复利用空间(回溯后撤销操作)
function permute(nums: number[]): number[][] {
  const n = nums.length
  const used: boolean[] = [].fill(false)
  const list = []
  const ans: number[][] = []

  function backtrack(len: number){
    if(len === n){
      ans.push([...list])
    }
    for(let i=0; i<n; i++){
      if(!used[i]){
        list.push(nums[i])
        used[i] = true
        backtrack(len+1)
        list.pop()
        used[i] = false
      }
    }
  }
  backtrack(0)
  return ans
}
// @lc code=end
