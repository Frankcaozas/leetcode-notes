/*
 * @lc app=leetcode.cn id=1584 lang=typescript
 *
 * [1584] 连接所有点的最小费用
 */

// @lc code=start
function minCostConnectPoints(points: number[][]): number {
  const len = points.length
  const graph = new Array(len).fill([])
  for(let i=0; i<points.length; i++){
    for(let j=0; j<points.length; j++){
      if(i!=j){
        const dis = Math.abs(points[i][0]-points[j][0])+Math.abs(points[i][1]-points[j][1])
        graph[i].push([i,j,dis])
      }
    }
  }

  const inTree = new Array(len).fill(false)
  const lowcost = []
  const cut = (x)=>{
    for(const adj of graph[x]){
      const to = adj[1]
      if(inTree[to]) continue
      lowcost.push(adj)
    }
  }


};


// @lc code=end

