let btn = document.querySelector("#btn1");
//     btn.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);  //evt => event

//     console.log("button was click");
//     let a = 25;
//     a++;
//     console.log(a); //26
// }

/* 

btn.addEventListener("click", (evt)=>{   // click was event and ()=> arrow function
    console.log("button was clicked");
    console.log(evt);
    console.log(evt.type); // u can also print type target and etc.
})

*/

btn.addEventListener("click", ()=>{   
    console.log("button was clicked-- Handler1");
})

btn.addEventListener("click", ()=>{
    console.log("button was clicked-- Handler2");
})

btn.addEventListener("click", ()=>{
    console.log("button was clicked-- Handler3");
})


const handler4 =  ()=>{
    console.log("button was clicked-- Handler4");  // if u want to remove any event listerner then u'll need to put that event in a const variable so when u remove then the (remove.EventListener) target that same stored event.
}

btn.addEventListener("click", handler4);

btn.removeEventListener("click", handler4);

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("u r inide of the div");
// }