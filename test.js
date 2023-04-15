function getMinD(r, l) {
  if (l === 0) {
    return r
  } else {
    return getMinD(l, r % l)
  }
}

function getMaxD(a, b) {
  const minD = getMinD(a, b);
  return (a * b)/ minD ;
}
console.log(getMaxD(30, 3))
console.log(getMaxD(1, 4))
console.log(getMaxD(2, 2))
console.log(getMaxD(20, 15))
console.log()
