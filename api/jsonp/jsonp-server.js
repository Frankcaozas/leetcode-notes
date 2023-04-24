const http = require('http'); 
const url = require('url')
const qs = require('querystring')
const server = http.createServer((req, res)=>{
  const {query, path} = url.parse(req.url)
  const param = qs.parse(query)
  const data = { name: 'shanyue', id: param.id }
  //后端传回去的字符串调用callback并传参
  if(param.callback){
    res.end(`${param.callback}(${JSON.stringify(data)})`)
  }else{
    res.end()
  }
})
server.listen('1001', ()=>console.log('finish'))