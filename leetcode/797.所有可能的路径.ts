/*
 * @lc app=leetcode.cn id=797 lang=typescript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
function allPathsSourceTarget(graph: number[][]): number[][] {
  const path: number[] = []
  const ans: number[][]  = [] 
  
  const dfs = (x: number) => {
      path.push(x)
      if(x === graph.length-1){
          ans.push(path.slice())
      }
      for(const next of graph[x]){
          dfs(next)
      }
      path.pop()
  }

  dfs(0)
  return ans
};
// @lc code=end

