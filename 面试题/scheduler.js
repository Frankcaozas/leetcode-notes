// JS实现一个带并发限制的异步调度器Scheduler，
// 保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，
// 使得以下程序能正确输出

class Scheduler {
  constructor() {
    this.count = 2
    this.queue = []
    this.run = []
  }

  excute(task) {
    this.run.push(task)
    Promise.resolve(task()).then(() => {
      task.resolve()
      this.run.splice(this.run.findIndex(task), 1)
      if (this.queue.length) {
        this.excute(this.queue.shift())
      }
    })
  }

  add(task) {
    return new Promise((resolve, reject) => {
      task.resolve = resolve
      if (this.run.length < this.count) {
        this.excute(task)
      } else this.queue.push(task)
    })
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')

// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4

class concurrentScheduler {
  count = 2
  queue = []
  curCnt = 0

  add(task) {
    this.queue.push(task)
    this.next()
  }

  async next() {
    if (this.curCnt < this.count) {
      const task = this.queue.shift()
      if (task) {
        this.curCnt++
        await task()
        this.curCnt--
        this.next()
      }
    }
  }
}

const timer = (n, time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(n)
      resolve()
    }, time)
  })

const s = new concurrentScheduler()

s.add(() => timer('1', 1000))
s.add(() => timer('2', 500))
s.add(() => timer('3', 300))
s.add(() => timer('4', 400))

