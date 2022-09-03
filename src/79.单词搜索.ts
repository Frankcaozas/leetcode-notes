/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  const dfs = (k: number, board: string[][], row: number, col: number) => {
    //搜索后将该位置改为空串， 或者用一个数组标记
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
      return false
    if (board[row][col] != word.charAt(k)) return false
    if (k === word.length - 1) return true

    //搜索后将该位置改为空串,并用temp记录下字母
    const temp = board[row][col]
    board[row][col] = ''

    const res =
      dfs(k + 1, board, row - 1, col) ||
      dfs(k + 1, board, row + 1, col) ||
      dfs(k + 1, board, row, col - 1) ||
      dfs(k + 1, board, row, col + 1)

    //还原
    board[row][col] = temp
    return res
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(0, board, i, j)) return true
    }
  }
  return false
}

// @lc code=end
