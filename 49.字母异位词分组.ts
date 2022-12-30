/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const copyOfStrs = new Array(strs)
  const ans = []
  for(const str1 of copyOfStrs){
    copyOfStrs.splice(copyOfStrs.indexOf(str1))
    const list = [str1]
    for(const str2 of copyOfStrs){
      const set = new Set(str1)
      for(const char of str1){
        set.add(char)
      }
      if(set.size===str1.length){
        list.push(str2)
        copyOfStrs.splice(copyOfStrs.indexOf(str2))
      }
    }
    ans.push(list)
  }
  return ans
};
// @lc code=end

