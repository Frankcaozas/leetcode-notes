  /**
   * 
   * @param {number[]} nums 
   * @param {number} k 
   */
  function maxSlidingWindow(nums, k) {
    const queue = []
    const res = []
    for(let i=0; i<k; i++){
      while(queue.length && queue[queue.length-1]<nums[i]){
        queue.pop()
      }
      queue.push(nums[i])
    }
    res.push()
    for(let i=1;i<nums.length-k+1; i++){
      if(nums[i-1] === queue[0]) queue.pop()
      while(queue.length && queue[queue.length-1]<nums[i]){
        queue.pop()
      }
      queue.push(nums[i])
      res.push(queue[0])
    }
  }
