function deepClone(source, weakmap) {
  const isPrimitive = (val) => {
    return /Number|Boolean|BigInt|String|Symbol|Null|Undefined|Function/.test(
      Object.prototype.toString.call(val)
    )
  }
  weakmap || (weakmap = new WeakMap())
  if (isPrimitive(source)) return source
  const typeStr = Object.prototype.toString.call(source)
  const type = typeStr.substring(8, typeStr.length - 1)
  console.log(type)
  let result = null
  switch (type) {
    case 'Array':
      result = source.map((val) => deepClone(val, weakmap))
    case 'Date':
      result = new Date(source)
    case 'RegExp':
      result = new RegExp(source)
    case 'Set':
      const set = new Set()
      Object.entries(set).forEach(([key, val]) => {
        set.add(val)
      })
      result = set
    case 'Map':
      const map = new Map()
      Object.entries(map).forEach(([key, val]) => {
        map.set(key, val)
      })
      result = map
    case 'Object':
      if (weakmap.has(source)) return weakmap.get(source)
      else {
        result = {}
        weakmap.set(source, result) //必须写在递归复制属性前面！
        for (key in source) {
          result[key] = deepClone(source[key], weakmap)
        }
      }
  }
  return result
}

const obj = {
  re: /hello/,
  f() {},
  date: new Date(),
  map: new Map(),
  list: [1, 2, 3],
  a: 3,
  b: 4,
}

const obj2 = { a: obj }
obj.obj2 = obj2

console.log(deepClone(obj))
