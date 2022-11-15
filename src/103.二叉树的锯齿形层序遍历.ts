/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if(root === null) return []
  const queue: TreeNode[] = [root]
  const ans =[]
  let fromLeft = true
  while(queue.length){
    const level = []
    for(let i=0; i<queue.length; i++){
      const node = queue.pop()
      if(fromLeft){
        level.unshift(node.val)
      }else{
        level.push(node.val)
      }
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
      ans.push(level)
      fromLeft = !fromLeft
    }
  }
  return ans
};
// @lc code=end

