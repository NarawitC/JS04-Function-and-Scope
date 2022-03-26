function findMax(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
  // alert(num1);
  // alert(num2);
  // alert(num3);
  // alert(num4);
  let max = undefined;
  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    let max = undefined;
    return;
    max = num1;
  } else {
    // alert(num1);

    if (num2 > num1) {
      max = num2;
    }
    if (num3 > num2) {
      max = num3;
    }
    if (num4 > num3) {
      max = num4;
    }
  }
  alert(max);
}

// findMax(1, 52, 8, 92);
