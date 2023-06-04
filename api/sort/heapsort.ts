function heapify(arr: number[], start: number, end: number){
  //大顶堆
  let child  = start * 2 + 1
  let father = start
  while(child<=end){
    if(child +1 <=end && arr[child]< arr[child+1]) child += 1
    if(arr[child]<arr[father]){
      return 
    }else{
      swap(arr, child, father)
      father = child
      child = father*2+1
    }
  }
}

function buildHeap(arr: number[]){
  for(let i=Math.floor((arr.length-1)/2); i>=0; i--){ //最后一个父元素开始
    heapify(arr, i, arr.length-1)
  }
}

function heapSort(arr: number[]){
  buildHeap(arr)
  for(let i=arr.length-1; i>=0; i--){
    swap(arr, 0, i)
    heapify(arr, 0, i-1)  
  }
}

function swap(arr: number[], start: number, end: number){
  const temp = arr[start]
  arr[start] = arr[end]
  arr[end] = temp
}
