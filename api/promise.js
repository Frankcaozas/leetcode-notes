//Promise.all
function mypAll(promises) {
  promises = Array.from(promises)
  return new Promise((resolve, reject) => {
    const result = []
    let cnt = 0
    const len = promises.length
    for (let idx = 0; idx < len; idx++) {
      Promise.resolve(promises[idx])
        .then((res) => {
          result[idx] = res
          cnt++
          if (cnt === len) resolve(result)
        })
        .catch((e) => {
          reject(e)
        })
    }
  })
}
function myPromiseAll(promises) {
  promises = Array.from(promises)
  return new Promise((resolve, reject)=>{
    let cnt = 0
    const result = []
    for(let i=0; i<promises.length; i++){
      Promise.resolve(promises)
      .then(val=>{
        result[i] = val
        cnt++
      }).catch(e=>reject(e))
    }
    if(cnt === promises.length) resolve(result)
  })
}

// sleep for test
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// test Promise.all
// mypAll([1, 2, 3]).then((o) => console.log(o))
// mypAll([sleep(3000), sleep(2000), sleep(1000)]).then((o) => console.log(o))
// mypAll([sleep(3000), sleep(2000), sleep(1000), Promise.reject(10000)])
//   .then((o) => console.log(o))
//   .catch((e) => console.log(e, '<- Error'))

function allSettled(promises) {
  const onResolve = (value) => ({ status: 'fufilled', value })
  const onReject = (reason) => ({ status: 'rejected', reason })
  return Promise.all(
    promises.map((item) => Promise.resolve(item).then(onResolve, onReject))
  )
}

// test allSettled
allSettled([sleep(3000), sleep(2000), sleep(1000), Promise.reject(10000)]).then(val=>console.log(val))

const map = function (items, fn, concurrency = Infinity) {
  const arr = Array.from(items)
  let curIndex = 0
  const len = items.length
  const result = []
  return new Promise((resolve) => {
    function next() {
      const idx = curIndex
      curIndex++
      Promise.resolve(arr[idx])
        .then((item) => fn(item, idx))
        .then((val) => {
          result[idx] = val
          if (curIndex === len) resolve(result)
          else next()
        })
    }
    for (let i = 0; i <= concurrency && i < len; i++) {
      next()
    }
  })
}

// const now = Date.now()
// console.log('Start')
// map([1, 1, 1], (x) => sleep(x * 1000)).then((o) => {
//   console.log(o)
//   console.log(Date.now() - now, 'milliseconds')
// })

// map([1, 2, 3], (x) => x * 3).then((o) => console.log(o))

function myRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((prom) =>
      prom.then((val) => resolve).catch((e) => reject(e))
    )
  })
}


