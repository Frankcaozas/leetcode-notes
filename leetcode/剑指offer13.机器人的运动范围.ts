
function movingCount(m: number, n: number, k: number): number {
  let ans = 0
  const marked: boolean[][] = []
  for(let i=0; i<m; i++){
    marked.push(new Array(n).fill(false))
}
  const dfs = (i: number, j: number): void => {
    let x = calculate(i) + calculate(j)
    if( i<0 || m<0 || i>=m || j>=n || x>k || marked[i][j] ) return
    
    if(!marked[i][j] && x <= k){
      ans++
      marked[i][j] = true
    }
    dfs(i+1, j)
  
    dfs(i, j+1)

  }
  dfs(0, 0)
  return ans
};

function calculate(i: number): number {
  let res = 0
  while(i>0){
    res += i%10
    i = Math.floor(i / 10)
  }
  return res
}

