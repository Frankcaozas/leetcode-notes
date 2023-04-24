const getFetch = (nums) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(nums + 1)
    }, 1000)
  })
function* gen() {
  let res1 = yield getFetch(1)
  let res2 = yield getFetch(res1)
  let res3 = yield getFetch(res2)
  return res3
}

function myAsync(fn) {
  return function () {
    const gen = fn()
    return new Promise((resolve, reject) => {
      
      let result
      function next(key, value) {
        try {
          result = gen[key](value)
        } catch (err) {
          reject(err)
        }
        if (result.done) {
          resolve(result.value)
        } else {
          return Promise.resolve(result.value).then(
            (val) => next('next', val),
            (err) => next('throw', err)
          )
        }
      }
      next('next')
    })
  }
}

const testGAsync = myAsync(gen)
testGAsync().then((result) => {
  console.log(result)
})
