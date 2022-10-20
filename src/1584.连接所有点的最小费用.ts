/*
 * @lc app=leetcode.cn id=1584 lang=typescript
 *
 * [1584] 连接所有点的最小费用
 */

// @lc code=start
// function minCostConnectPoints(points: number[][]): number {
//   const len = points.length
//   const graph = new Array(len).fill([])
//   for (let i = 0; i < len; i++) {
//     for (let j = i+1; j < len; j++) {
//         const dis =
//           Math.abs(points[i][0] - points[j][0]) +
//           Math.abs(points[i][1] - points[j][1])
//         graph[i].push([i, j, dis])
//         graph[i].push([j, i, dis])
//     }
//   }
//   let cost = 0
//   const inTree = new Array(len).fill(false)
//   const lowcost = []
//   const cut = (x) => {
    
//     for (const adj of graph[x]) {
//       const to = adj[1]
//       if (inTree[to]) continue
//       lowcost.push(adj)
//     }
//   }
//   inTree[0] = true
//   cut(0)
//   while (lowcost.length > 0) {
//     const adj = lowcost.sort((a, b) => a[2] - b[2]).shift()
//     if (inTree[adj[1]]) continue
//     cost += adj[2]
//     inTree[adj[0]] = true
//     cut(adj[1])
//   }
//   return cost
// };

function minCostConnectPoints(points: number[][]): number {
  const len = points.length
  const graph = new Array(len)
  for(let i=0; i<len; i++){
    graph[i] = new Array(len)
  }
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
        const dis =
          Math.abs(points[i][0] - points[j][0]) +
          Math.abs(points[i][1] - points[j][1])
        graph[i][j] = dis
        graph[j][i] = dis
    }
  }

  function searchLowcost(from: number){
    for(let i=1;i<graph.length; i++){
      if(lowcost[i]!=0 && graph[from][i] < lowcost[i]){
        lowcost[i] = graph[from][i]
        //preAdj[i] = from
      }
    }
  }
  let res =0 
  //这道题只用算路径长度，不用记录节点，如果要记录节点需加一个数组preAdj 记录前一个节点index
  const lowcost: number[] = new Array(len).fill(Number.MAX_VALUE)
  //const preAdj = new Array(len).fill(0)

  searchLowcost(0)
  lowcost[0] = 0

  // 3. 剩余n - 1个节点未加入到Vnew，遍历
  for(let i=1; i<len; i++){
    let minIdx = -1
    let minDis = Number.MAX_VALUE
    for(let j=1; j<len; j++){
      if(lowcost[j]===0) continue
      if(lowcost[j]<minDis){
        minDis = lowcost[j]
        minIdx = j
      }
    }
    lowcost[minIdx] = 0
    res += minDis

    searchLowcost(minIdx)
  }
  return res
};



// @lc code=end
