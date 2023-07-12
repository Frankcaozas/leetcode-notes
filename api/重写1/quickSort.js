/**
 *
 * @param {Array<number>} arr
 */
function quickSort(arr) {
  const sort = (l, r) => {
    if (l >= r) return
    let i = l,
      j = r
    while (i < j) {
      while (i < j && arr[j] >= arr[l]) j--
      while (i < j && arr[i] <= arr[l]) i++
      swap(arr, i, j)
    }
    swap(arr, l, i)
    sort(l, i - 1)
    sort(i + 1, r)
  }
  sort(0, arr.length - 1)
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

const arr = [2, 3, 4, 2, 1]
quickSort(arr)
console.log(arr)

// function quickSort(arr, l, r) {
//   if (l >= r) return
//   let i = l,
//     j = r
//   while (i < j) {
//     while (i < j && arr[j] >= arr[l]) j--
//     while (i < j && arr[i] <= arr[l]) i++
//     swap(arr, i, j)
//   }
//   swap(arr, l, i)
//   quickSort(arr, l, i - 1)
//   quickSort(arr, i + 1, r)
// }

// function swap(arr, a, b) {
//   ;[arr[a], arr[b]] = [arr[b], arr[a]]
// }
// const arr = [10, 2, 0, 1, 5, 20, 1, 0]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)

