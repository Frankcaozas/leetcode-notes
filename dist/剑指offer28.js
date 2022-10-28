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
function isSymmetric(root) {
    if (!root)
        return false;
    return checkNode(root?.left, root?.right);
}
function checkNode(a, b) {
    if (a === null || b === null)
        return true;
    if (a.val != b.val)
        return false;
    return checkNode(a.left, b.right) && checkNode(a.right, b.left);
}
