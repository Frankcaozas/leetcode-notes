
const arr = []
for (let i = 0; i < 7; i++) {
  const today = []
  today.push(readline().split(':').map(v=>parseInt(v)))
  today.push(readline().split(':').map(v=>parseInt(v)))
  arr.push(today)
}

let time = 0

for(let i=0; i<arr.length; i++){
  const today = arr[i]
  const start = today[0], end = today[1]
  let todaytime = 0
  if(start[0] <= end[0]){
    todaytime += (end[0]-start[0]) * 60 
    todaytime += end[1] - start[1]
  }else{
    todaytime += (24-start[0]) * 60 
    todaytime += (end[0]) * 60 
    todaytime += 60 - start[1] + end[1]
  }
  time += todaytime
  console.log(i, todaytime)
}

console.log(time)
