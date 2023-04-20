function isNumber(val) {
  return val === +val
}
/**
 * @param {number[]} nums
 * @param {string[]} ops
 */
function calc(nums, ops) {
  if (nums.length < 2 || !ops.length) return
  const b = nums.pop(),
    a = nums.pop()
  const op = ops.pop()
  let res
  if (op === '+') res = a + b
  else if (op === '-') res = a - b
  else if (op === '*') res = a * b
  else if (op === '/') res = a / b
  else if (op === '^') res = Math.pow(a, b)
  else if (op === '%') res = a % b
  nums.push(res)
}
/**
 * @param {string} str
 *
 */
// (1+(4+5*2)-3)+(6+8)
function calculator(str) {
  const map = new Map()
    .set('-', 1)
    .set('+', 1)
    .set('*', 2)
    .set('%', 2)
    .set('^', 3)
  const strArr = [...str.replace(' ', '')]
  const nums = []
  const ops = []
  for (let i = 0; i < strArr.length; i++) {
    const char = strArr[i]
    if (char === '(') {
      ops.push(char)
    } else if (char === ')') {
      while (ops.length) {
        if (ops[ops.length - 1] !== '(') {
          calc(nums, ops)
          console.log(nums, ops);
        } else {
          ops.pop()
          break
        }
      }
    } else {
      if (isNumber(Number(char))) {
        //char是数字
        let idx = i
        let num = 0
        while (idx < strArr.length && isNumber(Number(strArr[idx]))) {
          num = num * 10 + Number(strArr[idx])
          idx++
        }
        i = idx - 1
        nums.push(num)
      } else {
        //char是计算符号
        if (i > 0 && (strArr[i - 1] === '(' || strArr[i - 1] === '+' || strArr[i - 1] === '-')) {
          nums.push(0);
      }
        while (ops.length && ops[ops.length - 1] !== '(') {
          const preOp = ops[ops.length - 1]
          if (map.get(preOp) >= map.get(char)) {
            calc(nums, ops)
          } else {
            break
          }
        }
        ops.push(char)
      }
    }
    console.log(nums, ops);
  }

  while (ops.length) calc(nums, ops)
  return nums[nums.length - 1]
}

console.log(calculator('1+(4+5*2)-3)+6+8'))
