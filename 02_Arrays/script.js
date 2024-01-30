
// let book1 = "Maths";
// let book2 = "Science";
// let book3 = "Physics";
// let book4 = "Chemistry";
// let book5 = "English";

// console.log(book1);
// console.log(book2);
// console.log(book3);
// console.log(book4);
// console.log(book5);

// let book1 = new Array("Maths", "Science", "Physics", "English", "Chemistry");
// console.log(book1);


// let book = ["Maths", "Science", "Physics", "English", "Chemistry", 23, 45];
// console.log(book.length);
// // console.log(book[1]);
// // console.log(book[0]);
// // console.log(book[2]);

// book[1] = "Biology";
// console.log(book);

// let number = [4, 76, 56, 6,];
// console.log(number);


// // Sorting the array.
// number.sort((a,b)=>a-b)
//     console.log(number);

// let book = ["Maths", "Science", "Physics", "English", "Chemistry",];
// // book.sort(); //It is sort the array increasing order. 

// book.push("Hindi");  //Adds new elements to the end of an array, and returns the new length

// book.unshift("Geography"); //Adds new elements to the beginning of an array, and returns the new length.
// // book.pop(); //Removes the last element of an array, and returns that element. u can use pop multiple time 

// book.shift();   //Removes the first element of an array, and returns that element u can use shift multiple time

// book.splice(3,1) // book.splice(1,3); //Adds/Removes elements from an array

// //  book.length = 0; // book = []; it makes whole array empty-- two technique.

// book.splice(2,0,"Civics");
// console.log(book);

// let pos = book.indexOf("Hindi");
// console.log(pos);

// let book1 = ["Maths", "Science", "Physics", "English", "Chemistry",];

// let book2 = ["Punjabi", "Marathi"];
// let book3 = ["Bengali", "Irish"];

// let newBook = book1.concat(book2, book3);
// console.log(newBook);

// let book1 = "Maths";
// let joins = book1.join(' ');
// console.log(joins);
// console.log(Array.isArray(book1));


// let text = "This is a random Text";

// let chnageText =text.split(' ');  // split method use for split string according to user.
// console.log(chnageText);


/* MULTIDIMENSIONAL ARRAY - 2D*/



// let book = ["Maths", "Science", "Physics", "English", "Chemistry",]; // 1D

// let bookwithPages = [
//     ["Math","300"],
//     ["Physics","290"],
//     ["Hindi","310"],
//     ["English","120"]
// ];
// let fetch = bookwithPages;
// console.log(fetch);

// console.log(bookwithPages[1][0]);


// let book = ["Maths", "Science", "Physics", "English", "Chemistry",]; // 1D

// // for(let i=0; i<book.length;i++){
// //     console.log(`Element ${i} is ${book[i]}`);
// // }

// book.forEach(myFunction);

// function myFunction(value){
//     console.log(value);
// }


/*
FUNCTIONS
*/

// for(let i =1; i<=10;i++){
//     document.write(`2 x ${i} = ${2*i}`);
//     document.write("<br>");
// }

function MulTable(num) {
    for (let i = 1; i <= 10; i++) {
        // document.write(`2 x ${i} = ${2*i}`);

        document.write(`${num} x ${i} = ${num * i}`);
        document.write("<br>");
    }
}
MulTable(2);  // function call, u can call multiple times.

document.write("I am Batman");
document.write("<br>");

// MulTable(5);

// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add(85, 5);
// function mul(num1, num2) {
//     console.log(num1 * num2);
// }
// mul(85, 5);
// function sub(num1, num2) {
//     console.log(num1 - num2);
// }
// sub(85, 5);
// function div(num1, num2) {
//     console.log(num1 / num2);
// }
// div(85, 5);


/*
ARGUMENTS
*/

/*
function add(){
    // console.log(arguments.length); this give length
    // console.log(arguments); this gives total arguments
    console.log(arguments[1]); // this gives what user want! it also work lke an arrya that's why u can acess elements like arrays.

}
// add(1,2);
// add(1,2,3);
add(3,4,5,6,7);

*/

/*
function add() {
    if (arguments.length == 0) {
        console.log("No parameter passed!");
    }
    else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        console.log(sum);
    }
}
add(2, 3, 4, 5, 6, 7);


function mul() {
    if (arguments.length == 0) {
        console.log("No parameter passed!");
    }
    else {
        let mul = 1;
        for (let i = 0; i < arguments.length; i++) {
            mul *= arguments[i];
        }
        console.log(mul);
    }
}
mul(2, 3, 3);

function add(a,b){
    return a+b;

}

let result = add(9,8);
console.log(result);
// console.log(add(8, 9));  u can do as u want!


function compare(a, b){
    if(a > b){
        return 1;
    }
    else if(b < a){
        return -1;
    }
    else{
        return 0;
    }
}

let c = compare(12, 13);
console.log(c);

*/

/*
GLOBAL AND LOCAL VARIABLE
*/

/*

let car = "Audi"; // global var

// car = "tata";
// car = "safari";
console.log(car);

function add(){
    let result = 33; // local var
    console.log(result);
}

function sub(){
    let result = 44;
    console.log(result);
}

add();

sub();

*/

// ANONYMOUS FUNCTIONS

//Function Expression

// let show = function (){
//     console.log("Hello World");
// };

// show();

/*

function show(){
    // console.log("Hello World!");
    let a = "Hi i am aman";
    console.log(a);
}

setTimeout(show, 2000);


setTimeout(function(){
    console.log("hello World!");
},1000);

*/

// IMMEDIATLEY INVOKED FUNCTION

/* */

// let show = function (){
//       console.log("Hello World"); This is normal anonymous function
//     };



// (function(){
//     console.log("Hello Aman");  // Turant banaya turant execute kr liya
// })();

// (function (){
//     let string = "Hello Aman";
//     console.log(string);
//     alert("Hello Sir");
// })();


// IMMEDIATLEY INVOKED FUNCTION --- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


let msg = "This is not aman";

function show() {
    console.log(msg);
}

show();

// IMMEDIATLEY INVOKED FUNCTION --- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
