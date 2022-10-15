/*
 * @lc app=leetcode.cn id=1584 lang=typescript
 *
 * [1584] 连接所有点的最小费用
 */

// @lc code=start
function minCostConnectPoints(points: number[][]): number {
  const len = points.length
  const graph = new Array(len).fill([])
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
        const dis =
          Math.abs(points[i][0] - points[j][0]) +
          Math.abs(points[i][1] - points[j][1])
        graph[i].push([i, j, dis])
        graph[i].push([j, i, dis])
    }
  }
  let cost = 0
  const inTree = new Array(len).fill(false)
  const lowcost = []
  const cut = (x) => {
    
    for (const adj of graph[x]) {
      const to = adj[1]
      if (inTree[to]) continue
      lowcost.push(adj)
    }
  }
  inTree[0] = true
  cut(0)
  while (lowcost.length > 0) {
    const adj = lowcost.sort((a, b) => a[2] - b[2]).shift()
    if (inTree[adj[1]]) continue
    cost += adj[2]
    inTree[adj[0]] = true
    cut(adj[1])
  }
  return cost
};

// @lc code=end
