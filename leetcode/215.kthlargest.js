/**
 * 
 * @param {Array<number>} arr 
 * @param {number} k 
 * @returns 
 */
function kthLargest(arr, k) {
  const sort = (l, r) => {
    // const random = Math.floor(Math.random() * (l - r + 1))
    // swap(arr, l, random)
    let i = l,
      j = r
    while (i < j) {
      while (i < j && arr[j] >= arr[l]) j--
      while (i < j && arr[i] <= arr[l]) i++
      swap(arr, i, j)
    }
    swap(arr, l, i)
    if (k < i) sort(l, i - 1)
    else if (k > i) sort(i + 1, r)
    return arr[i]
  }
  return sort(0, arr.length - 1)
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

const arr = [2, 3, 4, 2, 1]
console.log(kthLargest(arr, 3))
