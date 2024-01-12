let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

/*

let div = document.querySelector("div");

div.append(newBtn);  // node.append to add button in the last in div
div.prepend(newBtn);  // node.prepend to add button in the start of the div
div.before(newBtn);  // node.before to add button before starting of the div
div.after(newBtn);  //  node.afte to add button after the ending of the div


append => node.append(elem) // adds at the end of node(inside)
prepend => node.prepend(elem) // adds at the start of node(inside)
before => node.before(elem)  // adds before the node (outside)
after => node.after(elem)  // adds after the node (outside)
*/

let para = document.querySelector("p");
para.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "Hi I am New Here";

document.querySelector("body").prepend(newHeading);

let para1 = document.querySelector("p");
para1.remove();   // delete => node.remove() // remove the node