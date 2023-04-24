export function stringfy(obj){
  const entries = Object.entries(obj)
  return entries.map(([key, val])=>{
    let value
    value = val
    if(val === undefined || val === null) value = ''
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }).join('&')
}

console.log(stringfy({ a: 3, b: 4 }));
console.log(stringfy({ a: 3, b: null }));
console.log(stringfy({ a: '狗屎', b: 'shit' }));