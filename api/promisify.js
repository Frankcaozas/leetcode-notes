const fs = require('fs')
const p = require('path')

function promisify(fn, path) {
  return function(path){
    return new Promise((res, rej) => {
      fn(path, {encodeURI: 'utf-8'},(err, result)=>{
        if(err) rej(err)
        res(result)
      })
    })
  }

}

const promReadFile = promisify(fs.readFile)
console.log(p.resolve(__dirname, 'array.js'))
promReadFile(p.resolve(__dirname, 'array.js')).then(console.log).catch(console.log)
