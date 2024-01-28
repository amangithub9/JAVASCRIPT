class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");
console.log();
// chai.addCourse();
chai.logMe();

const tea = new User("masalaChai");
// console.log(tea);
tea.logMe();
console.log(chai === tea);
console.log(chai == tea);

console.log(chai instanceof User)
console.log(chai instanceof Teacher)