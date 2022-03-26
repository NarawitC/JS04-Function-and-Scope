let x = 1;
function func() {
  console.log(x); // *
  let x = 2;
}
func();
// Uncaught ReferenceError: Cannot access 'x' before initialization เพราะ ใช้ตัวแปร x ก่อนประกาศ ตัวแปร
