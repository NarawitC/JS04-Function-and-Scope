const checkLeapYear = (year) => {
  returnText = false;
  if (year % 4 === 0) {
    returnText = true;
  }
  if (year % 100 === 0) {
    returnText = false;
  }
  if (year % 400 === 0) {
    returnText = true;
  }
  return returnText;
};

// for (let i = 1900; i <= 3000; i++) {
//   if (checkLeapYear(i)) {
//     console.log(i);
//   }
// }
