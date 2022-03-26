// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

function noIf(age) {
  let runNum = 0;
  let ageOver18 = true;
  for (runNum; runNum <= 18; runNum++) {
    if (runNum === age) {
      ageOver18 = false;
    }
  }
  if (ageOver18 === true) return true;
  if (ageOver18 === false) return confirm('Did parents allow you?');
}

function questionMarkInsteadIf(age) {
  let runNum = 0;
  let ageOver18 = true;
  let p = '';
  for (runNum; runNum <= 18; runNum++) {
    runNum === age ? (ageOver18 = false) : (p = 'No important');
  }
  returnValue = true;
  ageOver18 === true ? (returnValue = true) : (returnValue = confirm('Did parents allow you?'));
  return returnValue;
}

function orInsteadIf(age) {
  let ageOver18 = true;
  ageOver18 = age > 18 || false;
  // console.log(ageOver18);
  return ageOver18 || confirm('Did parents allow you?');
}
