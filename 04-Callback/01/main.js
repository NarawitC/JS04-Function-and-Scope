function checkPermission(role, yes, no) {
  yes = function ACCESSGRANTED() {
    alert('ACCESS GRANTED');
  };
  no = function ACCESSDENIED() {
    alert('ACCESS DENIED');
  };

  if (role == 'ADMIN') {
    return yes();
  } else {
    return no();
  }
}

// checkPermission('admin');
