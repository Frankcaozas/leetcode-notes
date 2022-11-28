/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  //根据preorder不能确定树的结构，因为不确定根节点左边有几个，右边有几个
  //可根据inorder(中序算出左右各有几个)
  // map [[9,0],[3,1],[15,2],[20,3],[7,4]]
  //preorder第一个必为根节点
  const inorderMap = new Map() //根据preorderRoot的值去找inorderRoot在inorder数组的index

  function dfs(
    preorder: number[],
    inorder: number[],
    preLeft: number,
    preRight: number,
    inLeft: number,
    inRight: number
  ): TreeNode | null {
    if (preLeft > preRight) {
      return null
    }
    const inorderRoot = inorderMap.get(preorder[preLeft])
    const leftSize = inorderRoot - inLeft
    const root = new TreeNode(preorder[preLeft])
    //递归构造子节点
    root.left = dfs(
      preorder,
      inorder,
      preLeft + 1,
      preLeft + leftSize,
      inLeft,
      inorderRoot - 1
    )
    root.right = dfs(
      preorder,
      inorder,
      preLeft + leftSize + 1,
      preRight,
      inorderRoot + 1,
      inRight
    )
    return root
  }

  const len = inorder.length
  for (let i = 0; i < len; i++) {
    inorderMap.set(inorder[i], i)
  }
  return dfs(preorder, inorder, 0, len - 1, 0, len - 1)
}
// @lc code=end
