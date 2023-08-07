let ajaxQueue = [];
let concurrentRunning = 0;
const MAX_CONCURRENT = 3;

function ajax(...args) {
  return new Promise((resolve, reject) => {
    // 模拟ajax请求
    setTimeout(() => {
      resolve(...args);
    }, 1000);
  });
}

function concurrent(...args) {
  return new Promise((resolve, reject) => {
    function tryRun() {
      if (concurrentRunning < MAX_CONCURRENT && ajaxQueue.length > 0) {
        concurrentRunning++;
        const { args, resolve, reject } = ajaxQueue.shift();
        ajax(...args)
          .then(result => {
            concurrentRunning--;
            resolve(result);
            tryRun();
          })
          .catch(err => {
            concurrentRunning--;
            reject(err);
            tryRun();
          });
      }
    }

    ajaxQueue.push({ args, resolve, reject });
    tryRun();
  });
}


// 使用concurrent的测试例子
concurrent('Test1').then(result => console.log(result));
concurrent('Test2').then(result => console.log(result));
concurrent('Test3').then(result => console.log(result));
concurrent('Test4').then(result => console.log(result));
concurrent('Test5').then(result => console.log(result));

