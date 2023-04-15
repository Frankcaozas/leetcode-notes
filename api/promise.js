function mypAll(promises) {
  promises = Array.from(promises)
  return new Promise((resolve, reject) => {
    const result = []
    let cnt = 0
    const len = promises.length
    for(let idx=0; idx<len; idx++){
      Promise.resolve(promises[idx]).then((res) => {
        result[idx] = res
        cnt++
        if(cnt === len) resolve(result)
      }).catch((e)=>{
        reject(e)
      })
    }
  })
}

function sleep(time){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve()
    }, time);
  })
}

mypAll([1, 2, 3]).then((o) => console.log(o));
mypAll([sleep(3000), sleep(2000), sleep(1000)]).then((o) => console.log(o));
mypAll([sleep(3000), sleep(2000), sleep(1000), Promise.reject(10000)])
  .then((o) => console.log(o))
  .catch((e) => console.log(e, "<- Error"));
