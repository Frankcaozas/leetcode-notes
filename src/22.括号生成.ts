/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  //1 ()
  //2 ()() (())
  //3 ()()() (())() ()(()) (()()) ((()))
  const dp: string[][] = new Array(n+1)
  dp[0] = ['']
  dp[1] = ['()']
  for (let i = 2; i <= n; i++) {
    const set = new Set<string>()
    for (let j=0; j<i; j++) {
      const leftList = dp[j]
      const rightList = dp[i-1-j]
      for(const str1 of leftList){
        for(const str2 of rightList){
          set.add('('+str1+')'+str2)
        }
      }
    }
    dp[i] = Array.from(set)
  }
  return dp[n]
}

//递归
function generateParenthesis2(n: number): string[] {
  const dfs = (n: number): string[]=>{
    if(n===1) return ['()']
    const set = new Set<string>()
    for(const str of generateParenthesis2(n-1)){
      for(let i=0; i<2*n-2;i++){
        set.add(str.substring(0,i)+'()'+str.substring(i+1, str.length))
      }
    }
    return [...set]
  }
  return dfs(n)
}
// @lc code=end
