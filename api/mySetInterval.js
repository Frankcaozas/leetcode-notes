function mySetInterval(fn, time){
  let timer 
  const call = ()=>{
     timer = setTimeout(() => {
      fn()
      timer = call(fn, time)
    }, time);
    return timer
  }
  call()
  
  return ()=>{clearTimeout(timer)}
}

const start = new Date().getMilliseconds()

const clear = mySetInterval(()=>{
  const duration = new Date().getMilliseconds() - start
  console.log('执行了 '+ duration)
}, 2000)

setTimeout(clear, 10000)