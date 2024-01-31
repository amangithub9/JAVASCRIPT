/*
we are here to learn javascript from scratch.
we are going to learn fundametals of JS 
Data Types, Array, String, Dom Manupulation, Promises, Scope chaning,
make projects and many more thing.
*/


// console.log("hi aman");
// let a = "aman";
// let b = "gupta";
// console.log(`${a} ${b}`);
// alert("Hi I'm Batman");


// let c = document.getElementById("name");
// console.log(c);

// document.write("You are not Batman. You are Iron Man.");
document.getElementById("name").innerHTML = "You are not Batman. You are Iron Man."

//  let x = 2;
//  let y = 2;
//  console.log(x==y);

/*

let a = 3; // 3 => 2 => 1 => 0 => -1
while (a--) { // 0-- => 0
    console.log(a) // 2, 0
    if (a == 0) {
        continue;
    }
    a--; //
}
console.log(a) // -1

*/

// Operators

/*
            1. unary operator
            2. binary operators
            3. ternary operators
            4. arithmatic operators +, -, *, / , %
            5. assignemnt operator
 */


// LOGICAL OPERATORS

/*
          ANS(&&)
          OR(||)
          NOT(!)
*/


/*
/**
  and
        A        B       R
        true     true    true
        true     false   false
        false    true    false
        false    false   false
  
 * or
 
  A        B       R
        true     true    true
        true      false  true
        false    true    true
        false    false   false
  
 * not
        !true => false
        !false => true
 */


let x = "2"; //String
let y = 2;  // number
console.log(x === y);  // false

console.log(Number(undefined));

// arithmatic operators casts type of operands internallyto number type
console.log(x * y); // console.log(a * Number(b))
// number * string => 20 * NaN = NaN

console.log(2 * undefined) // 2 * Number(undefined) => 2 * NaN = NaN

console.log(2 - "-2");  // number subtract to minus string comes with addition


/*
 not all arithmatic operators do the internal typecasting
+ => behaves as both arithmatic(addition) and concatenation operator

*/
// console.log(String(undefined), "10", 10)
// console.log(undefined + " a");
// console.log(2 + +"5") // 25 invalid  if plus comes two time then it act like + operator

// console.log(Boolean());

//CONDITIONAL STATEMENTS

/*

        if ("" && 10) { // "" => false
            console.log("hello")
        }
        else if (undefined || '') { // "" => falsy
            console.log("second")
        }
        else if (undefined || (0 + "")) { // undefined || "0" => truthy
            console.log("third")
        }
        else {
            console.log("final")
        }

        if ("0") { // "0" => truthy
            console.log("djjd")
}

*/

// let a = 33;

// a = 28;

// let b = a;
// console.log(b);

// let a =34;
// // a--;
// --a;
// console.log(a);

//let a ="hel\"lo";
// let b = 'Aman\'s';
// let c = `Aman ${b}`;
// console.log(c);
// console.log(b);
// console.log(a); 

// let a = ["aman","gupta","virat","kohli"];
// console.log(a);



/*object */

let obj = {
    name: "aman",
    middle: "gupta",
    age: 22,
};
// console.log(typeof obj);
console.log(obj);

// let ab ="";
// console.log(typeof ab);


let abc =["aman","gupta",23,true];
console.log(abc);

// document.write("Hi This is Virat Kohli");


// for loop

// let count =0;

// for(let i=0;i<10;i++){
//     console.log("Hello World");
//     count++;
// }
// console.log(count);

// let counter =1;

// while(counter <=10){
//     console.log(typeof "Hi this is me");
//     counter++;
// }


// let counter =12;

// do{
//     console.log("Aman");
// }

// while(counter <=10){
//     console.log(typeof "Hi this is me");
//     counter++;
// }

aman: for(let i =1; i<=10;i++){
    // if(i == 4){
    //     break;
    // }
    document.write(i);
    document.write('<br>');
   

    for(let j =1; j<3 ;j++){

        if(i == 4){
            break aman;
        }
        document.write("Aman");
        document.write('<br>');
    }
}

