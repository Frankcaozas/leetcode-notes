"use strict";
function heapify(arr, start, end) {
    let father = start;
    let child = start * 2 + 1;
    while (child <= end) {
        console.log('child father' + father + ' '+ child)
        if (child + 1 <= end && arr[child][1] > arr[child + 1][1])
            child++;
        if (arr[child][1] > arr[father][1])
            return;
        else {
            const temp = arr[father];
            arr[father] = arr[child];
            arr[child] = temp;
            console.log('swap'+ ' ' + temp +' '+arr[father])
            father = child;
            child = father * 2 + 1;
        }
    }
}
function heapSort(arr) {
    for (let i = arr.length / 2 - 1; i >= 0; i--) {
        heapify(arr, i, arr.length - 1);
    }
}
function topKFrequent(nums, k) {
    const cntMap = new Map();
    const topKHeap = [];
    for (const num of nums) {
        console.log(num);
        cntMap.set(num, (cntMap.get(num) || 0) + 1);
    }
    for (const num of cntMap) {
        console.log('num cnt: ' + num[1]);
        console.log(topKHeap);
        if (topKHeap.length === k) {
            if (num[1] > topKHeap[0][1]) {
                topKHeap.shift();
                topKHeap.push(num);
                heapSort(topKHeap);
            }
        }
        else {
            topKHeap.push(num);
            heapSort(topKHeap);
        }
    }
    return topKHeap.map((val) => val[0]);
}
const res = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(res);
