let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click",() => {
   if(currMode === "light"){
    currMode ="dark";
    // document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
    modeBtn.innerText = "On";
   }
   else{
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
    modeBtn.innerText = "Off";
   }
   
   console.log(currMode);
});