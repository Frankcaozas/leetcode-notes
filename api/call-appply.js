Function.prototype.myCall = function (ctx = globalThis, ...args) {
  const key = Symbol('key')
  ctx[key] = this
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

Function.prototype.mybind = function(ctx, ...args){
  return (...rest)=>{this.call(ctx, ...args, ...rest)}
}


const person = {
  name: 'francao',
  say(...args) {
    console.log(this.name, ...args)
  },
}
person.say.myCall(person, 1, 2, 3)
person.say.myCall({name: 'sb'},333)

const bindSay = person.say.mybind({name: 'hukk'})
bindSay()
