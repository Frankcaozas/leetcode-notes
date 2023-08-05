const map = function (promises, fn, count = 2) {
  return new Promise((resolve, reject) => {
    let cnt = 0
    const result = []

    const next = () => {
      const idx = cnt
      cnt++
      Promise.resolve(promises[idx])
        .then((v) => fn(v, idx))
        .then((v) => {
          result[idx] = v
          if (cnt === promises.length) resolve(result)
          else next()
        })
        .catch(reject)
    }

    for (let i = 0; i <= count && i < promises.length; i++) {
      next()
    }
  })
}

const map2 = function (items, fn, concurrency = Infinity) {
  console.log('🚀 ~ file: promise.map.js:26 ~ map2 ~ concurrency:', concurrency)
  const arr = Array.from(items)
  console.log('🚀 ~ file: promise.map.js:27 ~ map2 ~ arr:', arr)
  let curIndex = 0
  const len = items.length
  const result = new Array(items.length)
  return new Promise((resolve) => {
    function next() {
      const idx = curIndex
      curIndex++
      console.log('🚀 ~ file: promise.map.js:35 ~ next ~ curIndex:', curIndex)
      Promise.resolve(arr[idx]())
        .then((item) => fn(item, idx))
        .then((val) => {
          result[idx] = val
          if (curIndex === len) resolve(result)
          else next()
        })
    }
    for (let i = 0; i < concurrency && i < len; i++) {
      console.log('iiii',i)
      next()
    }
  })
}

const timer = (n, time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(n)
    }, time)
  })

map2(
  [
    ()=>timer(1, 1000).then(console.log),
    ()=>timer(2, 500).then(console.log),
    ()=>timer(3, 300).then(console.log),
    ()=>timer(4, 400).then(console.log),
  ],
  (val) => val + 1,
  2
).then(console.log)
