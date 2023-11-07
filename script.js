class info {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
const u1 = new info("WhoMee", "mihika09");
console.log(u1.username);
function f1() {
  let uname = document.getElementById("username").value;
  let pword = document.getElementById("password").value;
  console.log(uname);
  if (uname === u1.username) {
    if (pword === u1.password) {
      return true;
    } else {
      alert("Password is wrong");
      return false;
    }
  } else {
    alert("Username is wrong");
    return false;
  }
}
