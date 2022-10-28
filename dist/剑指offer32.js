"use strict";
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function levelOrder(root) {
    if (!root)
        return [];
    const queue = [];
    queue.push(root);
    const ans = [];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            ans.push(node?.val);
            queue.push(node?.left);
            queue.push(node?.right);
        }
    }
    return ans;
}
