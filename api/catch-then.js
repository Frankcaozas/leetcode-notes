const promise = new Promise((resolve, reject) => {
  reject('Error occurred');
});

promise
  .catch(error => {
    console.log('Caught error:', error);
  })
  .then(() => {
    console.log('This will still be executed.');
  }, ()=>{
    console.log('catch 2')
  });