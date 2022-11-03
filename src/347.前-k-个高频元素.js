function heapify(arr, start, end) {
    var father = start;
    var child = start * 2 + 1;
    while (child <= end) {
        if (child + 1 <= end && arr[child][1] > arr[child + 1][1])
            child++;
        if (arr[child][1] > arr[father][1])
            return;
        else {
            var temp = arr[father];
            arr[father] = arr[child];
            arr[child] = temp;
            father = child;
            child = father * 2 + 1;
        }
    }
}
function heapSort(arr) {
    for (var i = arr.length / 2 - 1; i >= 0; i--) {
        heapify(arr, i, arr.length - 1);
    }
}
function topKFrequent(nums, k) {
    var cntMap = new Map();
    var topKHeap = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        console.log(num);
        cntMap.set(num, (cntMap.get(num) || 0) + 1);
    }
    for (var _a = 0, cntMap_1 = cntMap; _a < cntMap_1.length; _a++) {
        var num = cntMap_1[_a];
        console.log('num cnt: ' + num);
        if (topKHeap.length === k) {
            if (num[1] > topKHeap[0][1]) {
                topKHeap.shift();
                topKHeap.push(num);
                heapSort(topKHeap);
            }
        }
        else {
            topKHeap.push(num);
            if (topKHeap.length === k)
                heapSort(topKHeap);
        }
    }
    return topKHeap.map(function (val) { return val[0]; });
}
var res = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(res);
