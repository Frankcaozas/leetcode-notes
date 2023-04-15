class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if(!root) return false
  return checkNode(root?.left, root?.right)

}
function checkNode(a: TreeNode | null, b: TreeNode | null){
  if(a === null || b === null) return true
  if(a.val != b.val) return false
  
  return checkNode(a.left, b.right) && checkNode(a.right, b.left)
}

