function set(obj, str, val) {
  const keys = str.split('.')
  let cur = obj
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      cur[keys[i]] = val
    } else {
      cur[keys[i]] = cur[keys[i]] ? cur[keys[i]] : {}
      cur = cur[keys[i]]
    }
  }
  return obj
}

console.log(set({}, 'a.b.c', 123))
console.log(set({ a: { b: { c: 111 } } }, 'a.b.c.d', 123))
