function heapify(arr: [number, number][], start: number, end: number) {
  let father = start
  let child = start * 2 + 1
  while (child <= end) {
    if (child + 1 <= end && arr[child][1] > arr[child + 1][1]) child++
    if (arr[child][1] > arr[father][1]) return
    else {
      const temp = arr[father]
      arr[father] = arr[child]
      arr[child] = temp
      father = child
      child = father * 2 + 1
    }
  }
}

function heapSort(arr: [number, number][]) {
  for (let i = arr.length / 2 - 1; i >= 0; i--) {
    heapify(arr, i, arr.length - 1)
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const cntMap = new Map<number, number>()
  const topKHeap: [number, number][] = []
  for (const num of nums) {
    console.log(num);
    cntMap.set(num, (cntMap.get(num) || 0) + 1)
  }
  for (const num of cntMap) {
    console.log('num cnt: ' + num)
    if (topKHeap.length === k) {
      if (num[1] > topKHeap[0][1]) {
        topKHeap.shift()
        topKHeap.push(num)
        heapSort(topKHeap)
      }
    } else {
      topKHeap.push(num)
      if(topKHeap.length===k) heapSort(topKHeap)
    }
  }
  return topKHeap.map((val) => val[0])
}

const res = topKFrequent([1, 1, 1, 2, 2, 3], 2)
console.log(res)
