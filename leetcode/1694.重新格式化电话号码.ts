/*
 * @lc app=leetcode.cn id=1694 lang=typescript
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
function reformatNumber(number: string): string {
  const processedNum = number.replace(/[- ]/g, '')
  let ans: string = ''
  let i = 0
  for (i = 0; i < processedNum.length - 4; i += 3) {
    ans = ans + processedNum.slice(i, i+3) + '-'
  }
let x = processedNum.length-i
  if (x === 3) {
    ans = ans + processedNum.slice(i, i+3) + '-'
  } else {
    if(x === 4){
        ans = ans + processedNum.slice(i, i+2) + '-' + processedNum.slice(i+2, i+4)
    }else{
        ans = ans + processedNum.slice(i, i+2)
    }
  }
  return processedNum
}
// @lc code=end
