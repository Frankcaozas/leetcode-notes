Function.prototype.myCall = function (ctx = globalThis, ...args) {
  const symbol = Symbol('call')
  ctx[symbol] = this
  const result = ctx[symbol](...args)
  delete ctx[symbol]
  return result
}

Function.prototype.mybind = function (ctx, ...args) {
  // const fn = this
  // const bindFn = (...rest)=>{
  //   if(fn instanceof bindFn)
  //     return new fn(...args, ...rest)
  //   return fn.call(ctx, ...args, ...rest)
  // }
  // return bindFn
  const fn = this

  const bindFn = function (...rest) {
    if (this instanceof bindFn) {
      //new 的情况
      return new fn(...args, ...rest)
    }
    return fn.call(ctx, ...args, ...rest)
  }
  return bindFn
}

const person = {
  name: 'francao',
  say(...args) {
    console.log(this.name, ...args)
  },
}
person.say.myCall(person, 1, 2, 3)
person.say.myCall({ name: 'sb' }, 333)

const bindSay = person.say.mybind({ name: 'hukk' })
bindSay()
const fn = function (args) {
  this.b = 'a'
  this.c = 123
  console.log(args)
}.mybind({ a: 123 })

console.log(new fn(123))
fn()
