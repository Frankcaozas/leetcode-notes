/**
 *
 * @param {string} str
 */
function camelToSlash(str) {
  let res = str.replace(/([A-Z])/g, (str, p1) => {
    return '-' + p1.toLowerCase()
  })
  if (res.startsWith('-')) res = res.substring(1)

  return res
}

console.log(camelToSlash('getElementById'))
console.log(camelToSlash('GetElementById'))
