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
function isSubStructure(A, B) {
    if (!B || !A)
        return false;
    return isSubStructure(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}
function compareTree(tree1, tree2) {
    if (tree2 === null)
        return true;
    if (!tree1 || tree1.val != tree2.val)
        return false;
    return compareTree(tree1.left, tree2.left) && compareTree(tree1.right, tree2.right);
}
