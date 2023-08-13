/**
 *
 * @param {number} n
 * @param {Array<number>} arr
 */
const solve = (n, arr) => {
  if (n === 1) return Array.from({ length: 10 }, () => 0)
  const dp = Array.from({ length: n + 1 }, () => new Array(10).fill(0))

  const a = arr[arr.length - 1]
  const b = arr[arr.length - 2]
  dp[1][(a * b) % 10] = 1
  dp[1][(a + b) % 10] = 1

  for (let i = 2; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      dp[i][(j * arr[arr.length - i - 1]) % 10] += dp[i - 1][j]
      dp[i][(j + arr[arr.length - i - 1]) % 10] += dp[i - 1][j]
    }
  }
  return dp[n-1]
}

console.log(solve(4, [1,2,3,4,5]))

//写一段快速排序


