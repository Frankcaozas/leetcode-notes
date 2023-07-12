function stringify (data) {
  const pairs = Object.entries(data)
  const qs = pairs.map(([k, v]) => {
    let noValue = false
    if (v === null || v === undefined || typeof v === 'object') {
      noValue = true
    }
    return `${encodeURIComponent(k)}=${noValue ? '' : encodeURIComponent(v)}`
  }).join('&')
  return qs
}

function jsonp({url, fn, params}) {
  const script = document.createElement('script')
  const fnName = 'jsonp' + Math.random().toString().slice(3)
  console.log(fnName)
  window[fnName] = fn
  // console.log(window[fnName]);
  script.src = url + '?' + stringify({callback: fnName,...params})
  document.body.appendChild(script)
}
