let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // *
// Hello, John เพราะ phrase = 'Hello' user = 'John'
