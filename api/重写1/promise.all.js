/**
 *
 * @param {Array<Promise>} promises
 */
Promise.prototype.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length
    const res = []
    let cnt = 0
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then((data) => {
          res[i] = data
          cnt++
          if (cnt === len) resolve(res)
        })
        .catch(reject)
    }
  })
}
