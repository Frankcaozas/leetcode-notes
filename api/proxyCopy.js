// const origin = { a: { zzz: 'frra', c: undefined }, b: 'foo', g: null }
// const hadnler = {
//   get(target, key) {
//     target[key] = new Proxy(target, hadnler)
//     return target[key]
//   },
//   set(target, key, val) {
//     target[key] = val
//     return true
//   },
// }
// const proxyObj = new Proxy(origin, hadnler)

// console.log(proxyObj)
// proxyObj.a.zzz = 123
// console.log(proxyObj)
// console.log(origin)

function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  const proxy = new Proxy(obj, {
    // construct(target) {
    //   return deepClone(target);
    // },
    get(target, prop) {
      const res = deepClone(target[prop])
      // target[prop] = res
      return res
    },
    set(target, key, val) {
      target[key] = val
      return
    },
  })
  return proxy
}

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
    f: new Date(),
  },
}

const obj2 = deepClone(obj1)

console.log(obj1 === obj2) // false
console.log(obj1.b === obj2.b) // false
console.log(obj1.b.d === obj2.b.d) // false
console.log(obj1.b.f === obj2.b.f)
console.log(obj1, obj2)
obj1.a = 3
obj1.b.c = 5
console.log(obj1, obj2)
