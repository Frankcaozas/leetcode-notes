function queryString(url) {
  const queryString = url.split('?')[1]
  if(!queryString) return {}
  const params = {}
  for(const pair of queryString.split('&')) {
    const [key, value] = pair.split('=')
    params[key] = decodeURIComponent(value)
  }
  return params
}