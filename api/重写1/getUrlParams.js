const { get } = require("http")

/**
 *
 * @param {string} url
 */
function getUrlParams(url) {
  const params = {}
  const parastr = url.split('?')[1]
  if (!parastr) return params
  parastr.split('&').forEach((v) => {
    const [key, val] = v.split('=')
    params[key] = val
  })
  return params
}

console.log(getUrlParams('https://www.nowcoder.com/?type=11235_0'))