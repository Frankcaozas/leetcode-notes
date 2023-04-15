// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function mirrorTree(root: TreeNode | null): TreeNode | null {
  function swap(node: TreeNode | null): void{
    if(!node) return
    const temp = node.left
    node.left = node.right
    node.right = temp
    swap(node.left)
    swap(node.right)
  }
  
  if(!root) return null
  swap(root)
  return root
}


