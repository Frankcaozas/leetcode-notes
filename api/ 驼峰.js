//短横线转驼峰
function toCamelCase(str) {
  return str.replace(/-([a-zA-Z])/g, (all, i)=>{
    return i.toUpperCase()
  })
}

/**
 * 驼峰转横线
 * @param {string} str 
 * @returns 
 */
function toLineCase(str){
  return str.replace(/([A-Z])/g, (all, i)=>{
    console.log(all, i)
    return '-'+all.toLowerCase()
  }).substring(1)
}
console.log(toCamelCase('get-element-by-id'));
console.log(toLineCase('GetElementBy'))