function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
    // setUsername(username)  // this can't make any call to upper function
  SetUsername.call(this, username); //now this method can access upper function
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
