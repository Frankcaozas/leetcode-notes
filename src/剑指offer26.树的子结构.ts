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

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!B || !A) return false
  return isSubStructure(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function compareTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean{
  if(tree2 ===  null) return true
  if(!tree1 || tree1.val != tree2.val) return false
  return compareTree(tree1.left, tree2.left) && compareTree(tree1.right, tree2.right)
}

