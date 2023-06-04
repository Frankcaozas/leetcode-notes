//短横线转驼峰
function toCamelCase(str) {
  return str.replace(/-([a-zA-Z])/g, function(all, i){
    console.log(all, i)
      return i.toUpperCase();
  })
}
//驼峰转横线
function toLineCase(str){
  return str.replace(/([A-Z])/g, (all, i)=>{
    return '-'+i.toLowerCase()
  })
}
console.log(toCamelCase('get-element-by-id'));
console.log(toLineCase('getElementBy'))