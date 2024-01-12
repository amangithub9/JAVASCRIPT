
let obj = {
    firstName: 'Aman',
    lastName: 'Gupta',
    address: 'Delhi',
    work: 'Developer',
    salary: '25000/pm',

    sayHello: function () {
        console.log("Hii Me");   // Basic one 
    }
            /* 
            sayHello (){
            console.log("Hi mee");   // 4th method use in ES6 version.
            }
        */
};

obj.age = 25;
obj.firstName = 'aman';

// delete obj.lastName;

console.log(obj.firstName, obj.lastName);
console.log(obj['firstName']);
console.log(obj['lastName']);
console.log(obj);           //use dot to get real value, modify or add anything    

console.log('height' in obj);  // we use in property to get true or false value instead of undefined
console.log('age' in obj);


for (let key in obj) {
    console.log(key);
    console.log(key + ": " + obj[key]);
}

obj.sayHello = function () {
    console.log("Hii Me");   // Basic one 
}
obj.sayHello();

function greet() {
    console.log("Hii ME");
}
obj.sayHello = greet;
obj.sayHello();



let person = {
    first_Name : 'Aman',
    last_name : 'Gupta',
    sayHi (){
        
        console.log(`Hello my name is ${this.first_Name} and i have a ${car.brand} car`);
        console.log(`Hello my name is ${person.first_Name} and i have a ${car.brand} car`);
    }
};

let car ={
    brand : 'Tata',
    model : 'Safari',
}

person.sayHi();



/*
MATHS ***************************************************************************************************
*/

var x = Math.round(4.7);
x = Math.ceil(4.2);
x = Math.floor(4.6);
x = Math.trunc(4.66);

console.log(x);

var y = Math.pow(10,9);
console.log(y);


// let z = Math.floor(Math.random() * 10); // 0 - 9
let z = Math.floor(Math.random() * 10) + 1; // 1 - 10
console.log(z);


/*
DATE OBJECT 
 */

let xy = new Date();  // total 7 parameter we have.
console.log(xy);

let xz = new Date(2023, 6, 12, 10, 55, 56, 9);
console.log(xz);

let yz = new Date("October 20, 2023 12:12:15");
console.log(yz.getFullYear());
console.log(yz.getTime());
console.log(yz.getMonth());
console.log(yz.getDate());
console.log(yz);    // there are various meythods to get exect time for user.