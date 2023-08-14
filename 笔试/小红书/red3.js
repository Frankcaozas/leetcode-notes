function readInt() {
  return parseInt(readline())
}

function readArr() {
  return readline()
    .split(' ')
    .map((v) => parseInt(v))
}

const n = readInt()
const weights = readArr()
const graph = new Array(n).fill(0).map(v=>new Array(n).fill(0))
for(let i=0; i<n-1; i++){
  const [a,b] = readArr()
  graph[a][b] = 1
  graph[b][a] = 1
}

