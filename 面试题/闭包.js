function foo(){
  var arr = []
  for(let i=0; i<10; i++){
    
    arr[i] = function(){
      console.log(i)
      return i
    }
  }
  return arr
}

var fn = foo()
console.log(fn[0]())
console.log(fn[1]())