"use strict";
/*
 * @lc app=leetcode.cn id=1790 lang=typescript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */
// @lc code=start
function areAlmostEqual(s1, s2) {
    const n = s1.length;
    const diff = [];
    for (let i = 0; i < n; ++i) {
        if (s1[i] !== s2[i]) {
            if (diff.length >= 2) {
                return false;
            }
            diff.push(i);
        }
    }
    if (diff.length === 0) {
        return true;
    }
    if (diff.length !== 2) {
        return false;
    }
    return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
}
;
// @lc code=end
