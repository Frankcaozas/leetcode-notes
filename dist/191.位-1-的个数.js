"use strict";
/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */
// @lc code=start
function hammingWeight(n) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        ans += n & 1;
        n = n >> 1;
    }
    return ans;
}
// @lc code=end
