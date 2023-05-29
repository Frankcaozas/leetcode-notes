/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param string s
 * @return int整型
 */
function lengthOfLongestSubstring( s ) {
  const map = new Map()
  const ans = 1
  let l =0 , r = 0
  while(l<=r && r<s.length){
    const c = s.charAt(i)
    if(!map.has(c)){
      map.set(c, r)
      r++
      ans = Math.max(ans, r-l+1)
    }else{
      l = map.get(c)
      map.set(c, r)
    }
  }
  return ans
}
module.exports = {
  lengthOfLongestSubstring : lengthOfLongestSubstring
};