function checkPrimeNumber(x) {
  for (let i = 1; i <= 100; i++) {
    let primeNumber = true;
    for (let j = 2; j < i; j++)
      if (i % j === 0) {
        primeNumber = false;
        // console.log(primeNumber);
      }
    // console.log(primeNumber);
    if (primeNumber === true) {
      if (x === i) {
        alert('This is Prime Number');
      }
    }
  }
}
// checkPrimeNumber(97);

function primeNumberBefore(y) {
  for (let i = 2; i <= y; i++) {
    let primeNumber = true;
    for (let j = 2; j < i; j++)
      if (i % j === 0) {
        primeNumber = false;
        // console.log(primeNumber);
      }
    // console.log(primeNumber);
    if (primeNumber === true) {
      console.log(i);
    }
  }
}
// primeNumberBefore(100)