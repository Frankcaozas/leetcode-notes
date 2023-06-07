function mySetInterval(fn, time){
  setTimeout(() => {
    fn()
    mySetInterval(fn, time)
  }, time);
}

const start = new Date().getMilliseconds()

mySetInterval(()=>{
  const duration = new Date().getMilliseconds() - start
  console.log('执行了 '+ duration)
}, 2000)