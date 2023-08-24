function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function getNext() {
  let current = 2; // Start with the first prime number

  return function() {
    while (true) {
      current++;
      if (isPrime(current)) {
        return current;
      }
    }
  };
}

const getNextPrime = getNext();

console.log(getNextPrime()); // Returns 3
console.log(getNextPrime()); // Returns 5
console.log(getNextPrime()); // Returns 7
console.log(getNextPrime())
console.log(getNextPrime())
console.log(getNextPrime())
console.log(getNextPrime())