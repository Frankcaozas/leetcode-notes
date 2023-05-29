function myInstanceOf(object, costructor){
  //不是函数 false
  if(typeof costructor !== 'function') return false 
  // null  || undefined
  if(object === null || object === undefined) return false
  let prototype = Object.getPrototypeOf(object)
  while(prototype !== null){
    if(prototype === costructor.prototype) return true
    prototype = Object.getPrototypeOf(prototype)
  }
  return false
}

function Person() {}
const person = new Person();
console.log(Object.getPrototypeOf(Function), Function.prototype)
console.log(myInstanceOf(person, Person));  // true
console.log(myInstanceOf(person, Object));  // true
console.log(myInstanceOf(person, Array));   // false
console.log(myInstanceOf(null, Object));    // false
console.log(myInstanceOf(undefined, Object)); // false