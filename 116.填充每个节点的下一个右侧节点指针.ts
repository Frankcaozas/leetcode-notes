/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
  export class Node {
      val: number
      left: Node | null
      right: Node | null
      next: Node | null
      constructor(val?: number, left?: Node, right?: Node, next?: Node) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
          this.next = (next===undefined ? null : next)
      }
 }
 

function connect(root: Node | null): Node | null {
    if(root === null) return root
    const queue: Node[] = []
    queue.push(root)
    while(queue.length > 0){
      const cnt = queue.length
      if(cnt>1){
        for (let i=0; i<queue.length-1; i++) {
          queue[i].next = queue[i+1]
        }
      }
      
      for(let i=0;i<queue.length-1; i++){
        const node = queue.shift()
        if(node?.left)
          queue.push(node?.left)
        if(node?.right)
          queue.push(node?.right)
      }
      

    }
    return root
};
// @lc code=end

