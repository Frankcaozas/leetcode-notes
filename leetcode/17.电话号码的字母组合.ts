/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if(digits.length===0) return []
  const map = new Map()
    .set(2, ['a', 'b', 'c'])
    .set(3, ['d', 'e', 'f'])
    .set(4, ['g', 'h', 'i'])
    .set(5, ['j', 'k', 'l'])
    .set(6, ['m', 'n', 'o'])
    .set(7, ['p', 'q', 'r', 's'])
    .set(8, ['t', 'u', 'v'])
    .set(9, ['w', 'x', 'y', 'z'])
    let index =0
    const dfs = (arr: string[], set: string[])=>{
      if(index>=digits.length) return
      const newArr = ['']
      for(const addchar of set){
        for(const char of arr){
          newArr.push(char+addchar)
        }
      }
      index++
      dfs(newArr, map.get(digits.charAt(index)))
    }
    dfs([''],map.get(digits.charAt(index)))
}
// @lc code=end
