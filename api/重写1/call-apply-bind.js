Function.prototype.myCall = function (ctx = globalThis, ...args) {
  const symbol = Symbol('call')
  ctx[symbol] = this
  const res = ctx[symbol](...args)
  delete ctx[symbol]
  return res
}

//test myCall
const obj = {
  name: 'frnak',
  sayName(...args) {
    console.log(this.name)
    console.log(args)
  },
}
obj.sayName()
obj.sayName.call({ name: 'sb' }, 1, 2, 3)

Fucntion.prototype.myBind = function (ctx = globalThis, ...args) {
  const fn = this

  const bindFn = (...rest) => {
    if (this instanceof bindFn) {
      return new fn(...args, ...rest)
    }

    return fn.call(ctx, ...args, ...rest)
  }
}
