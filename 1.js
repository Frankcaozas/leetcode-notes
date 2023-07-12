
// JS实现一个带并发限制的异步调度器Scheduler，
      // 保证同时运行的任务最多有两个。
      // 完善代码中Scheduler类，
      // 使得以下程序能正确输出
class Scheduler {
  constructor() {
    this.count = 2
    this.queue = []
    this.run = []
    this.index = 0
  }

  excute() {
    // console.log('run',this.run)
    // console.log('queue',this.queue)
    if (this.index<this.run.length) {
      const fn = this.run[this.index]
      this.index++
      // console.log(fn())
      Promise.resolve(fn()).then(() => {
        this.run.shift()
        this.index = this.index-1
        if (this.run.length < this.count) {
          const next = this.queue.shift()
          if (next) {
            this.run.push(next)
          }
          
        }
        this.excute()
      })
    }
  }

  add(task) {
    console.log(this.queue.length < this.count)
    if (this.run.length < this.count) this.run.push(task)
    else this.queue.push(task)
    this.excute()
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time)
    }).then(() => {
      console.log(order)
    })
  })
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
scheduler.excute()
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4