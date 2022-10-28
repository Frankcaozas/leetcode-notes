"use strict";
/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */
// @lc code=start
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function addTwoNumbers(l1, l2) {
    const ans = new ListNode();
    let cur = ans;
    let cnt = 0;
    while (l1 != null && l2 != null) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        cur.next = new ListNode((n1 + n2 + cnt) % 10);
        cnt = Math.floor((n1 + n2 + cnt) / 10);
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
        cur = cur.next;
    }
    if (cnt > 0)
        cur.next = new ListNode(cnt);
    return ans.next;
}
;
// @lc code=end
