function readInt() {
  return parseInt(readline())
}

function readArr() {
  return readline()
    .split(' ')
    .map((v) => parseInt(v))
}
const n = readInt()
const [TIME_LIMIT, H_Limit] = readline()
  .split(' ')
  .map((v) => parseInt(v))

const arr = new Array(n)
for (let i = 0; i < n; i++) {
  arr[i] = readline()
    .split(' ')
    .map((v) => parseInt(v))
}


function maxHappiness(n, T, H, events) {
  let dp = new Array(n + 1).fill(0).map(() => new Array(T + 1).fill(0).map(() => new Array(H + 1).fill(0)));

  for (let i = 1; i <= n; i++) {
    let [t, h, a] = events[i - 1];
    for (let j = 0; j <= T; j++) {
      for (let k = 0; k <= H; k++) {
        if (j >= t && k >= h) {
          dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - t][k - h] + a);
        } else {
          dp[i][j][k] = dp[i - 1][j][k];
        }
      }
    }
  }

  return dp[n][T][H];
}

let ans = maxHappiness(n, TIME_LIMIT, H_Limit, arr)
console.log(ans)

// console.log(dp[TIME_LIMIT][H_Limit])
