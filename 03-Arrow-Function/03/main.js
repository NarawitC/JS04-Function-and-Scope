const square = (n) => {
  n ** 2;
};

console.log(square(7)); // *
// undefined  เพราะไม่มีการ return ค่า

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // **
// 28.274333882308138 เพราะจะreturn Math.PI * r ** 2
