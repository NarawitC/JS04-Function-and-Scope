let message = 'Welcome to Thailand';

function logMessage(message) {
  message = 'Hello everybody';
  console.log(message); // *
}
// ไม่มีผลลัพธ์ เพราะ ยังไม่มีการเรียกใช้ function

logMessage(message);
console.log(message); // **
// Hello everybody เพราะ console.log("Hello everybody")
// Welcome to Thailand

let name = 'John';

function sayHi(input) {
  console.log(name); // ***
  name = input;
}

sayHi();
// John เพราะ name จะไปเรียก let name = "John"; มาใช้แทน
console.log(name); // ****
undefined;
