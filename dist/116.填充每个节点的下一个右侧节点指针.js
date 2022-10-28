/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */
// @lc code=start
export class Node {
    val;
    left;
    right;
    next;
    constructor(val, left, right, next) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
}
//优化版,next指针简化连接过程
function connect(root) {
    if (root === null)
        return root;
    let levelLeft = root;
    while (levelLeft.left != null) {
        let head = levelLeft;
        while (head != null) {
            head.left.next = head.right;
            if (head.next)
                head.right.next = head.next.left;
            head = head.next;
        }
        levelLeft = levelLeft.left;
    }
    return root;
}
// function connect(root: Node | null): Node | null {
//     if(root === null) return root
//     const queue: Node[] = []
//     queue.push(root)
//     while(queue.length > 0){
//       const cnt = queue.length
//       if(cnt>1){
//         for (let i=0; i<queue.length-1; i++) {
//           queue[i].next = queue[i+1]
//         }
//       }
//       for(let i=0;i<queue.length-1; i++){
//         const node = queue.shift()
//         if(node?.left)
//           queue.push(node?.left)
//         if(node?.right)
//           queue.push(node?.right)
//       }
//     }
//     return root
// };
// @lc code=end
