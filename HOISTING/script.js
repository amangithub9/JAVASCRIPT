// var a;

// Following two line of this code is runing sucessfully due to hoisting.
console.log(a);

sayHello();

function sayHello(){
console.log("Hello Aman");
}

var a = 19; // declartion hoisted to the top but not initialization is not
console.log(a);