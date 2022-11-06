/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b)=>{
    return a[0]-b[0]
  })
  const merged = []
  for(const interval of intervals){
    if(merged.length===0) merged.push(interval)
    const last = merged[merged.length-1]
    if(interval[0] <= last[1] && interval[1]> last[1]){
      merged.push([last[0], interval[1]])
    }
  }
  return merged
};
// @lc code=end

