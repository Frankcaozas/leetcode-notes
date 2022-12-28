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
  let fistRowHasZero = false
  let fistColHasZero = false

  //看第一列是否有0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      fistColHasZero = true
      break
    }
  }
  //看第一行是否有0
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      fistRowHasZero = true
      break
    }
  }
  //看每个位置是否有0， 如果有将的第一行第一列记成0
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
        if(matrix[i][j] ===0 ){
            matrix[i][0] = matrix[0][j] = 0
        }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
        if(matrix[i][0] ===0 || matrix[0][j]===0){
            matrix[i][j] = 0
        }
    }
  }
  if(fistColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
  if(fistRowHasZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0
    }
  }
}
// @lc code=end
