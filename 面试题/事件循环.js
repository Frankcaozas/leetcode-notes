function fn (){
  return new Promise((resolve,reject) => {
    const p  = new Promise((resolve, reject) => {
      resolve(5)
    })

    resolve(6)
    p.then(console.log)
  })
}

fn().then(console.log)