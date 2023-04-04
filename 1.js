const line1 = readline().split(' ')
const n = line1[0]
const m = line1[1]
const a = new Array(n).fill(0)
const op = readline().split(' ')
const x = readline.split(' ').map(a=>+a)
const y = readline.split(' ').map(a=>+a)
let res = ''
for(let i=0; i<m; i++){
  if(op[i] === '0'){
    a[x[i]] = y[i]
  }else if(op[i] === '1'){
    let sum = 0
    for(let j=x[i]; j<=y[i]; j++){
      sum += a[j]
    }
    res += sum.toString() + ' '
  }
}
console.log(res)
