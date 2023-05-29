/**
 *
 * @param {number[]} arr
 */
//[1, 2, 3, 3, 3, 3, 4, 5]
function countNumber(arr, target) {
  let l = 0,
    r = arr.length - 1
  while (l < r) {
    const mid = (l + r+1) >> 1
    if (arr[mid] > target) {
      r = mid -1
    } else {
      l = mid
    }
  }
  if(arr[l] !== target) return 0
  // console.log(l, r)
  const end = l
  ;(l = 0), (r = arr.length - 1)
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2 )
    if (arr[mid] >= target) {
      r = mid
    } else {
      l = mid +1
    }
  }
  const start = l
  // console.log(start, end >=arr.length)
  return end - start + 1
}
console.log(countNumber([1, 2, 3, 3, 3, 3, 4, 5], 3))
console.log(countNumber([1, 2, 3, 3, 3, 3, 4, 5], 3)); // 4
console.log(countNumber([1, 2, 3, 3, 3, 3, 4, 5], 5)); // 1
console.log(countNumber([1, 2, 3, 3, 3, 3, 4, 5], 10)); // 0
console.log(countNumber([1, 2, 3, 3, 3, 3, 4, 5], 0))
