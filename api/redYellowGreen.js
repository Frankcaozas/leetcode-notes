async function hongLvDeng(){
   function timer(color, time){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve()
      }, time)
    }).then(()=>{
      console.log(color)
    })
  }

  //  await timer('red', 2000)
  //  await timer('green', 2000)
  //  await timer('yellow', 5000)
  for(let i=1; i<=10; i++){
    await timer(i.toString(), i*100)
  }
}

hongLvDeng()