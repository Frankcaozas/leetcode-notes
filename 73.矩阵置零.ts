/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */

// O(m+n)
//  function setZeroes(matrix: number[][]): void {
//   const xSet = new Set()
//   const ySet = new Set()
//   for(let i=0; i<matrix.length; i++){
//       for(let j=0; j<matrix[0].length; j++){
//           if(matrix[i][j] ===0 ){
//               xSet.add(i)
//               ySet.add(j)
//           }
          
//       }
//   }
//   for(let i=0; i<matrix.length; i++){
//       for(let j=0; j<matrix[0].length; j++){
      
//           if(xSet.has(i) || ySet.has(j)){
//               matrix[i][j] = 0
//           }
//       }
//   }
// };

//o(1)
function setZeroes(matrix: number[][]): void {
    
};
// @lc code=end

