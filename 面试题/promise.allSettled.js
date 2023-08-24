Promise.myAllSettled = function(promises){
  const onRes = (data) => ({status: 'fufilled', data})
  const onRej = (reason) => ({status: 'rejected', reason})
  return Promise.all(promises.map(p => p.then(onRes, onRej)))
}

const promises = [
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3),
  Promise.reject(4)]

  console.log(Promise.myAllSettled(promises))
