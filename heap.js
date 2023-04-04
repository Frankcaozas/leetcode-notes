function heapify(arr, start, end) {
    //大顶堆
    var child = start * 2 + 1;
    var father = start;
    while (child <= end) {
        if (child + 1 <= end && arr[child] < arr[child + 1])
            child += 1;
        if (arr[child] < arr[father]) {
            return;
        }
        else {
            swap(arr, child, father);
            father = child;
            child = father * 2 + 1;
        }
    }
}
function buildHeap(arr) {
    for (var i = Math.floor((arr.length - 1) / 2); i >= 0; i--) { //最后一个父元素开始
        heapify(arr, i, arr.length - 1);
    }
}
function heapSort(arr) {
    buildHeap(arr);
    for (var i = arr.length - 1; i >= 0; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, i - 1);
    }
    return arr
}
function swap(arr, start, end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

console.log(heapSort([3,1,5,2,11,24]))
console.log(heapSort([1,3,4,123,5,1,2,3]))