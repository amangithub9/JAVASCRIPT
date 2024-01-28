class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static creatId() {   // use static for make unique id to sequre id 
    return `123`;
  }
}

const aman = new User("aman");
// aman.creatId();
// console.log(aman.creatId());
console.log(aman);


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.creatId());
