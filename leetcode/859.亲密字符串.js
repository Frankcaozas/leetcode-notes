/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length)
        return false
    if (s === goal) {
        const count = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s[i].charCodeAt() - 'a']++
            if (count[s[i].charCodeAt() - 'a'] > 1)
                return true
        }
        return false;
    } else {
        let left = -1, right = -1
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {
                if (left === -1) {
                    left = i
                } else if (right === -1) {
                    right = i
                } else {
                    return false
                }
            }
        }
        if (s[left] === goal[right]) {
            return true
        }
    }
    return false

}


// @lc code=end

