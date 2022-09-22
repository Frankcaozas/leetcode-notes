class MinStack {
  private arr: number[] = []
  private minArr: number[] = []
  constructor() {}

  push(x: number): void {
    const minArr = this.minArr
    this.arr.push(x)
    if (minArr.length > 0) {
      if (x <= minArr[minArr.length - 1]) {
        minArr.push(x)
      }
    } else {
      this.minArr.push(x)
    }
  }

  pop(): void {
    if (this.arr.length >= 1) {
      const minArr = this.minArr
      const x = this.arr.pop()
      if(x === minArr[minArr.length-1] ){
          minArr.pop()
      }
    }
  }

  top(): number {
    return this.arr[this.arr.length - 1]
  }

  min(): number {
    return this.minArr[this.minArr.length - 1]
  }
}