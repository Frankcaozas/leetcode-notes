// class EventEmiter {
//   event = {}

//   on(type, callback){
//     this.event[type] = this.event[type] || []
//     this.event[type].push(callback)
//   }

//   emit(type, ...args){
//     const callbacks = this.event[type]
//     if(!callbacks) return
//     callbacks.forEach(callback=>{
//       callback(...args)
//     })
//   }

//   off(type, callback){
//     this.event[type] = this.event[type] || []
//     this.event[type] = this.event[type].filter(call => call!==callback)
//   }

//   once(type, callback){
//     const call = (...args)=>{
//       callback(...args)
//       this.off(type, call)
//     }
//     this.on(type, call)
//   }
// }

class EventEmiter {
  events = {}
  on(type, callback) {
    this.events[type] = this.events[type] || []
    this.events[type].push(callback)
  }
  off(type, callback) {
    const e = this.events[type]
    if (!e) return
    this.events[type] = e.filter((fn) => fn !== callback)
  }
  emit(type, ...args) {
    const e= this.events[type]
    if(!e) return
    e.forEach(fn=>fn(...args))
  }
  once(type, callback) {
    this.events[type] = this.events[type] || []
    const fn = (...args)=>{
      callback(...args)
      this.off(type, fn)
    }
    this.on(type, fn)
  }
}
const e = new EventEmiter()

const callback = (x) => {
  console.log('Click', x.id)
}
e.on('click', callback)
e.on('click', callback)

// 只打印一次
const onceCallback = (x) => console.log('Once Click', x.id)
e.once('click', onceCallback)
e.once('click', onceCallback)

//=> 3
e.emit('click', { id: 3 })

//=> 4
e.emit('click', { id: 4 })
e.emit('fuck', [])
