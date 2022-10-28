"use strict";
/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */
// @lc code=start
function threeSum(nums) {
    const threeSumRes = [];
    const sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        const a = sorted[i];
        if (i > 0 && a === sorted[i - 1])
            continue;
        let left = i + 1;
        let right = nums.length - 1;
        for (; left < nums.length - 1; left++) {
            const b = sorted[left];
            if (left > i + 1 && b === sorted[left - 1])
                continue;
            while (right > left && sorted[right] + a + b > 0) {
                right--;
            }
            if (left === right)
                break;
            if (sorted[right] + a + b === 0)
                threeSumRes.push([a, b, sorted[right]]);
        }
    }
    return threeSumRes;
}
// @lc code=end
