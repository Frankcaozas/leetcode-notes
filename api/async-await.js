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
      function next(key, value) {
        let res
        try {
          res = gen[key](value)
        } catch (e) {
          reject(e)
        }
        if (res.done) resolve(res.value)
        else {
          return Promise.resolve(res.value)
            .then((val) => next('next', val))
            .catch((err) => next('throw', err))
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
