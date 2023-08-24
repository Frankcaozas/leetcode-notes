/**
 *
 * @param {Object} obj
 * @param {Function} fn
 */
function myInstanceOf(obj, fn) {
  let proto = Object.getPrototypeOf(obj)
  while (proto !== null) {
    if (proto === fn.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
  return false
}


console.log(myInstanceOf(new Date(), Object))
console.log(myInstanceOf(new Date(), Number))