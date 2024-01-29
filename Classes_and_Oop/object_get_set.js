const User = {
  _email: 'abc@fb.com',
  _password: '1234',

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};


const app = Object.create(User);
console.log(app.email);