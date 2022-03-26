const factorial = (num) => {
  let result = 1;
  if (num == 0) {
    result = 0;
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  }
  return result;
};

// factorial(5);
