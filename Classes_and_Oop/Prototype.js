// let myName = "   aman     ";

// console.log(myName.length);
// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
// console.log(heroPower.thor);
// console.log(heroPower.spiderman);

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all object`);
};

Array.prototype.heyHitesh = function () {
  console.log(`hey hitesh hello`);
};

// heroPower.hitesh();
// myHeros.hitesh();

// heroPower.heyHitesh();
// myHeros.heyHitesh();

//Prototype Inheritance old Syntax bellow

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// Teacher.__proto__ = User;

// Mordern Systax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "  ChaiAurCode   ";

String.prototype.trueLength = function () {
  //   console.log(`${this.name}`);
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"amangupta".trueLength();
"virat".trueLength();
