let usernameInput = prompt('Enter username');
let passwordInput = prompt('Enter password');
function loginStatus(username, password) {
  if (username === 'admin' && password === 'P@ssw0rd') {
    alert('Success');
  } else {
    alert('Failed');
  }
}

// loginStatus(usernameInput, passwordInput);
