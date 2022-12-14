/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const origin = image[sr][sc]
  const dfs = (sr: number, sc: number)=>{
    if(sr<0 || sr>=image.length || sc<0 || sc>=image[0].length) return
    if(image[sr][sc] != origin || image[sr][sc]===color) return
    if(image[sr][sc] === origin) image[sr][sc] = color
    dfs(sr-1,sc)
    dfs(sr+1,sc)
    dfs(sr,sc-1)
    dfs(sr,sc+1)
  }
  dfs(sr,sc)
  return image
};
// @lc code=end

