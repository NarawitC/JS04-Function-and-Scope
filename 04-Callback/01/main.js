function checkPermission(role, yes, no) {
  if (role == 'ADMIN') {
    yes();
  } else {
    no();
  }
}

const yes1 = function ACCESSGRANTED() {
  alert('ACCESS GRANTED');
};
const no1 = function ACCESSDENIED() {
  alert('ACCESS DENIED');
};

checkPermission('ADMIN', yes1, no1);
