/* DOM PRACTICE........

let h1 = document.querySelector("h1");

console.dir(h1.innerText);
console.dir(h1);

h1.innerText = h1.innerText + " I am aman";

*/

// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);

// let idx = 1;
// for(div of divs){
//     div.innerText = `new value ${idx}`;
//     idx++;
// }

// divs[0].innerText ="new value 1";
// divs[1].innerText ="new value 2";
// divs[2].innerText ="new value 3";

/* 
YOU CAN CHANGE ANYTHING U WANT COLOR BG COLOR FONTSIZE ANYTHING

let divs = document.querySelector("div");

divs.style.backgroundColor = "purple";
divs.style.fontSize = "25px" //many more to go 
// divs.style.visibility = "hidden";

divs.innerText = "Hello!";

*/

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);