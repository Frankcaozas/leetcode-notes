class myPromise {
  static resolve(val) {
    if (val && val.then) return val
    return new myPromise((resolve) => resolve(val))
  }
  constructor(fn) {
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    this.error = undefined
    this.state = 'pending'
    this.value = undefined
    const resolve = (val) => {
      setTimeout(() => {
        this.value = val
        this.state = 'fulfilled'
        this.resolveCallbacks.forEach(({fn, resolve:res, reject: rej}) => {
          res(fn(this.value))
        })
      })
    }
    const reject = (error) => {
      this.error = error
      this.state = 'rejected'
      this.rejectCallbacks.forEach(({fn, resolve:res, reject: rej})=>{
        rej(fn(this.error))
      })
    }
    fn(resolve, reject)
  }

  then(fn) {
    if (this.state === 'fulfilled') {
      const result = fn(this.value)
      // 需要返回一个 Promise
      // 如果状态为 resolved，直接执行
      return myPromise.resolve(result)
    }
    if (this.state === 'pending') {
      return new myPromise((resolve, reject)=>{
        this.resolveCallbacks.push({fn, resolve, reject})
      })
    }
  }
  catch(fn){
    if (this.state === 'rejected') {
      const result = fn(this.error)
      return myPromise.resolve(result)
    }
    if (this.state === 'pending') {
      return new myPromise((resolve, reject)=>{
        this.rejectCallbacks.push({fn, resolve, reject})
      })
    }
  }
}

myPromise.resolve(10)
  .then((o) => o * 10)
  .then((o) => o + 10)
  .then((o) => {
    console.log(o)
  })

new myPromise((resolve, reject) => reject('Error')).catch((e) => {
  console.log('Error', e)
})