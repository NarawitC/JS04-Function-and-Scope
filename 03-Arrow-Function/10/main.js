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

const checkAge = (year) => {
  let age = 0;
  for (year; year <= 2020; year++) {
    if (checkLeapYear(year)) {
      age += 366;
    } else {
      age += 365;
    }
  }
  return age;
};

checkAge(1000);
