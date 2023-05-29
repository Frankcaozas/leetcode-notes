function myNew(fn, ...args){
  const obj = {}
  Object.setPrototypeOf(obj, fn.prototype)
  const res = fn.call(obj, ...args)
  return res instanceof Object ? res : obj
}

// 验证mu_new函数
function Dog(name){
  this.name = name;
  this.say = function(){
      console.log('my name is' + this.name);
  }
}

const dog = myNew(Dog, "傻🐶");
dog.say() //my name is傻🐶


function reverse(){
  let i=0 
  const arr = [1,2,3,4]
 
  while(i<arr.length>>1){
    [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1],arr[i]]
    i++
  }
  return arr
}
console.log(reverse())