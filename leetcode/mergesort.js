function mergeSort(arr, l, r) {
  if(l>=r) return
  const mid = Math.floor((l + r) / 2)
  mergeSort(arr, l, mid)
  mergeSort(arr, mid + 1, r)
  const temp = arr.slice(l, r + 1)
  //silce后start为0, mid=mid-l ,end=r-l
  let i = 0, j = mid-l+1
  for(let k=l; k<=r; k++){
    if(i===mid-l+1){
      arr[k] = temp[j]
      j++
    }else if(j===r-l+1 || temp[i]<= temp[j]){
      arr[k] = temp[i]
      i++
    }else if(temp[i]>temp[j]){
      arr[k] = temp[j]
      j++
    }
  }
}

const arr = [3, 4, 1, 5, 2, 1]
mergeSort(arr, 0, arr.length-1)
console.log(arr);
