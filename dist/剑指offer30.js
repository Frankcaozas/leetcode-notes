"use strict";
class MinStack {
    arr = [];
    minArr = [];
    constructor() { }
    push(x) {
        const minArr = this.minArr;
        this.arr.push(x);
        if (minArr.length > 0) {
            if (x <= minArr[minArr.length - 1]) {
                minArr.push(x);
            }
        }
        else {
            this.minArr.push(x);
        }
    }
    pop() {
        if (this.arr.length >= 1) {
            const minArr = this.minArr;
            const x = this.arr.pop();
            if (x === minArr[minArr.length - 1]) {
                minArr.pop();
            }
        }
    }
    top() {
        return this.arr[this.arr.length - 1];
    }
    min() {
        return this.minArr[this.minArr.length - 1];
    }
}
