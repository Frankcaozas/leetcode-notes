const compose = (...fns) =>
  // 注意 f、g 的位置，如果实现从左到右计算，则置换顺序
  fns.reduce((f, g) => (...args) => f(g(...args)))
function fn1(props) {
  console.log("fn1");
  props.a = 2;
  console.log(props);
  return props;
}

function fn2(props) {
  console.log("fn2");
  console.log(props);
  props.a = 3;
  return props;
}

function fn3(props) {
  console.log("fn3");
  console.log(props);
  return props
}
const add10 = x => x + 10
const mul10 = x => x * 10
const add100 = x => x + 100

// (10 + 100) * 10 + 10 = 1110
console.log(compose(add10, mul10, add100)(10))
compose(fn1,fn2,fn3)({ a: 1 });