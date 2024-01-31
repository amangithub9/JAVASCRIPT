// function to intract with user -> alert. comfirm, prompt

/*
1. alert() - it shows a pop up messege.

2. prompt() - it takes input from user. shows a messege, It return the text on ok or, if cancel button or Ece is clicked, null.

3. confirm() - shows a messege, confirm with "ok" or "cancel" . It return true for OK and false for cancel/Esc.

*/

// Note: All these pause script execution and dont allow the visitors to intract with the rest of the page until the windows has been dismissed.


// alert("Hi this is me Batman");

// let age = prompt('Enter your age');
// console.log(age);

// if(age >= 18){
//     alert("u can vote");
// }
// else{
//     alert("u can't vote");
// }

// if(age != null){
//     document.write(`your age is ${age}`);
// }
// else{
//     document.write('Age Feild was Blank');
// }

// let responce = confirm('Are u sure, u wnat to deleted');

// if(responce){
//     document.write('deleted');
// }
// else{
//     document.write('not deleted');
// }


// let type = 2 + + "aman";
// console.log(type);
// console.log(typeof type);

// Functions 

/* 
1. String()
2. Number()
3. Boolean()
*/

// let numType = "9";
// console.log(typeof numType);

// let newnumType = Number(numType);
// console.log(typeof newnumType);

// let stringType = "Amna";
// console.log(typeof stringType);

// let boolType = 1;
// console.log(typeof boolType);

// let newBool = Boolean(boolType);
// console.log(newBool);

// let str = "Aman";
// console.log(str.length);

// if("Aman" == str){
//     document.write("Equal");
// }
// else{
//     document.write("Not Equal");
// }

// let str1 ="aman ";
// let str2 ="gupta";

// let str3 = str1.concat(str2);
// console.log(str3);

// let str = "Hello I am Aman Gupta and i am here to learn and Master Javascript";

// let substring = str.substr(7,22);
// console.log(substring);

// let str1 = str.substring(1,11);
// console.log(str1);

// let position1 = str.indexOf("Master");
// console.log(position1);

// let position2 = str.indexOf("am",10);
// console.log(position2);

// let position3 = str.lastIndexOf("Master");
// console.log(position3);



/* 
we use trim to maintain the length properly.

let string = "     Hello I am Aman Gupta and i am here to learn and Master Javascript    ";
console.log(string);

let trimedString= string.trim();    // there is specific trim as well we cn use as .trimStart() & .trimEnd().
console.log(trimedString);

*/


let makeUpperorLowerCase  = "Welcome Aman Gupta, continue learning";

let uc = makeUpperorLowerCase.toUpperCase();
console.log(uc);

let lc = makeUpperorLowerCase.toLowerCase();
console.log(lc);

let replace = makeUpperorLowerCase.replace('continue', 'faadu');
console.log(replace);

let include = makeUpperorLowerCase.includes('Aman');  //Singh => false.
console.log(include);

