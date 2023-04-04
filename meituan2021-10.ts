


function slectBag( weights: number[], bag: number){
  let totalWeight = 0
  weights.forEach(w=>{
    totalWeight += w
  })
  const dp = new Array(bag+1).fill(0)
  for(let i=0; i<=bag; i++){
    for(let j=0; j<weights.length; i++){
      if(i-weights[j]>= 0){
        dp[i] = Math.max(dp[i], dp[i-weights[j]]+1)
      }
    }
  }
  return dp[bag]
}

const ret = slectBag([1,2,2,4,5],15)