"use strict";
/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */
// @lc code=start
function rob(nums) {
    //1.偷第k间， 不能偷k-1， 最大为前k-2加上第k间
    //2.不偷第k间， 最大为k-1
    //dp[i] = Max(dp[i-2] + nums[i], dp[i-1])
    const len = nums.length;
    if (len <= 1) {
        return nums[0];
    }
    if (len <= 2) {
        return Math.max(nums[0], nums[1]);
    }
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
}
;
// @lc code=end
