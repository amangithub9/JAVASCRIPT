
/*
DATE OBJECT 
 */

let xy = new Date();  // total 7 parameter we have.
console.log(xy);

let xz = new Date(2023, 6, 12, 10, 55, 56, 9);
console.log(xz);

let yz = new Date("October 20, 2023 12:12:15");
let yy = new Date("October 20, 2023 12:12:15");

yy.setDate(yz.getDate() + 100);  // if u want any date from previous or after from this date the use .getDate + any number and set also to get the new value.

yy.setHours(yz.getHours() + 1); // this is how u can change hours. u can change what ever u want like this
console.log(yz);
console.log(yy);

console.log(yz.getFullYear());
console.log(yz.getDate());
console.log(yz.getMonth());  // months counting start from 0-11
console.log(yz.getDay());  // days counting starts from 0-6
console.log(yz.getTime());
console.log(yz.getHours());
console.log(yz.getMinutes());
console.log(yz.getSeconds());
console.log(yz.getMilliseconds());  // there are various meythods to get exect time for user.

// // this is get method and there is set methods as well we use set by dot(.setMonth()) like that but in ser method we need use out side of the console.log then print it, I'm going to use this below

// yz.setMonth(1); // its feburary count from 0-11.
// yz.setDate(24); // like this u can use as u want.
// console.log(yz);




document.write("Hi broo");




/*
GETTER AND SETTER
*/

var person ={
    name : "Aman",
    age : 25,

    // getName : function(){
    //     return this.name.toUpperCase();
    // }

    get getName(){
        return this.name.toUpperCase();
    }
}
console.log(person.getName);

// console.log(person.getName());


// setter and getter are the function that allows u to get and set objects values in JS

