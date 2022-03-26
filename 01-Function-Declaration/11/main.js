function sayHi(age) {
  if (age < 12) alert('Hi kid');
}
console.log(sayHi); // *
// ƒ sayHi(age) {
//   if (age < 12) alert('Hi kid');
// } เพราะ sayHi คือ function
console.log(sayHi(10)); // **
// undefined เพราะsayHi(10) return undefined

function sayHi(name) {
  if (name) {
    alert('Hi ' + name);
    return;
  } else {
    return 'Who are you';
  }
}
console.log(sayHi('John')); // ***
// undefined เพราะsayHi("John") return undefined

console.log(sayHi()); // ****
// Who are you เพราะsayHi() return Who are you
