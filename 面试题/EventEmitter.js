class EventEmitter {
  events = {}

  /**
   *
   * @param {string} type
   * @param {Function} callBack
   */
  on(type, callBack) {
    const tasks = this.events[type]
    if (!tasks) {
      this.events[type] = []
    }
    this.events[type].push(callBack)
  }

  emit(...types) {
    for (const type of types) {
      const tasks = this.events[type]
      if (!tasks) return
      for (const task of tasks) {
        task()
      }
    }
  }
}

const e = new EventEmitter()
e.on('foo', () => {
  console.log('foo')
})
e.emit('foo', 'b')
