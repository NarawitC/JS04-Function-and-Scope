function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // *
// ƒ (x) {
//   return x * 42;
// }
// console.log(answer)=console.log(magic()) จะสั่งให้function magic()ทำงาน
console.log(answer(1337)); // **
// 56154
// console.log(answer(1337)) =
// x = 1337
// function (x) {
//   return x * 42;
// };
console.log(magic(1337)(42)); // ***
// 1764
// console.log(magic(1337)(42)) =
// x= 42
// function (x) {
//   return x * 42;
// };
