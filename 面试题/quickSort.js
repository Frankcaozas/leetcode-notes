function quickSort(arr, l, r) {
  if (l >= r) return

  let i = l,
    j = r
  while (i < j) {
    while (i < j && arr[j] >= arr[l]) j--
    while (i < j && arr[i] <= arr[l]) i++
    swap(arr, i, j)
  }
  swap(arr, i, l)

  quickSort(arr, l, i - 1)
  quickSort(arr, i + 1, r)
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const arr = [3, -1, 0, 2, 11]
quickSort(arr, 0, 4)
console.log(arr)
