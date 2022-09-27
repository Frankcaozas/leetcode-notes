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

function levelOrder(root: TreeNode | null): number[] {
  if(!root) return []
  const queue: any[] = []
  queue.push(root)
  const ans: number[] = []
  while(queue.length>0){
    const node = queue.shift()
    if(node){
      ans.push(node?.val)
      queue.push(node?.left)
      queue.push(node?.right)
    }
  }
  return ans
}
