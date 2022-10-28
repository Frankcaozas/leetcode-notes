"use strict";
/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */
// @lc code=start
function plusOne(digits) {
    const len = digits.length;
    for (let i = 1; i < len; i++) {
        if (digits[len - i] + 1 >= 10) {
            digits[len - i - 1] += 1;
        }
        else {
            break;
        }
        digits[length - 1] = digits[length - 1] + 1;
    }
    digits[length - 1] = digits[length - 1] + 1;
    return digits;
}
;
// @lc code=end
