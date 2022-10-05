/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = []
  for(let i=0; i<numCourses; i++){
    graph.push([])
  }
  for(const req of prerequisites){
    graph[req[1]].push(req[0])
  }
// 借助一个标志列表 visited，用于判断每个节点 i （课程）的状态：
// 未被 DFS 访问：i == 0；
// 已被其他节点启动的 DFS 访问：i == -1；
// 已被当前节点启动的 DFS 访问：i == 1。

  const visited = new Array(numCourses).fill(0)
  const dfs = (num: number)=>{
    if(visited[num] === 1) return false
    if(visited[num] === -1) return true
    visited[num] = 1
    for(const nighbor of graph[num]){
      if(!dfs(nighbor)) return false
    }
    visited[num] = -1
    return true
  }
  for(let i=0; i<numCourses; i++){
    if(!dfs(i)) return false
  }
  return true
};
// @lc code=end

