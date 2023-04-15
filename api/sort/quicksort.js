function quickSort(arr, l, r) {
  if(l>=r) return 
  const mid = partition(arr, l, r)
  quickSort(arr, l, mid - 1)
  quickSort(arr, mid + 1, r)
}

function partition(arr, l, r) {
  let i = l,
    j = r
  while (i < j) {
    while (i < j && arr[l] <= arr[j]) j--
    while (i < j && arr[l] >= arr[i]) i++
    swap(arr, i, j)
  }
  swap(arr, i, l)
  return i
}
function swap(arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
const arr = [2,3,4,2,1]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
