/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left=0, right=n-1
        while(left < right){
            const mid = left+Math.floor((right-left)/2)
            if (!isBadVersion(mid+1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if(isBadVersion(left+1)) return left+1
        return -1
    };
};

// @lc code=end

