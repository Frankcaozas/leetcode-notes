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
// on off emit once
class EventEmiter {
  event = {}

  on(type, callback) {
    this.event[type] = this.event[type] || []
    this.event[type].push(callback)
  }

  off(type, callback) {
    this.event[type] = this.event[type] || []
    this.event[type] = this.event[type].filter(fn=>fn!==callback)
  }

  emit(type, ...args){
    const callbacks = this.event[type]
    if(!callbacks) return 
    callbacks.forEach(fn => {
      fn(...args)
    });
  }

  once(type, callback){
    this.event[type] = this.event[type] || []
    const onceFn = (...args)=>{
      callback(...args)
      this.off(type, callback)
    }
    this.on(type, onceFn)
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
