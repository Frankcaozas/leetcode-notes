Function.prototype.myCall = function (ctx = globalThis, ...args) {
  const key = Symbol('key')
  ctx[key] = this
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

Function.prototype.mybind = function (ctx, ...args) {
  const fn = this

  const bindFn = function (...rest) {
    if(this instanceof bindFn){//new 的情况
      return new bindFn(this, ...args, ...rest)
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
// person.say.myCall(person, 1, 2, 3)
// person.say.myCall({ name: 'sb' }, 333)

// const bindSay = person.say.mybind({ name: 'hukk' })
// bindSay()
const fn = function () {
  this.b = 'a'
  this.c = 123
}.mybind({a:123})

console.log(new fn())
fn()
