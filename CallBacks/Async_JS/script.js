// console.log("Hi");
// console.log("my");
// console.log("name");
// console.log("is");
// console.log("Aman");


// setTimeout(() => {
//   console.log("1- this is the first message")
// }, 5000);

// setTimeout(() => {
//   console.log("3- this is the third message")
// }, 3000);

// setTimeout(() => {
//   console.log("2- this is the second message")
// }, 4000);


// !-------------------       ----------------


const sayAman = function () {
  console.log("Aman");
}

const changeText = function () {
  document.querySelector('h1').innerHTML = "I'm the best player in the world"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function () {
  clearTimeout(changeMe);
  console.log("STOPPED");
})

// setTimeout(changeText, 1000)
setTimeout(sayAman, 2000)

