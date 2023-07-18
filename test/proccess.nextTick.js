console.log('start')

process.nextTick(() => {
  console.log('Process Next Tick');
});

Promise.resolve().then(()=>{
  console.log('promise')
})

console.log('end')