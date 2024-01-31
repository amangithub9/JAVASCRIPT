/* For In Loop In javascript*/

const myObject = {
  js: "javascript",
  java: "java",
  cpp: "c++",
  swift: "swift by apple",
};

for (const key in myObject) {
//   console.log(key);
//   console.log(myObject[key]);
}


const programming = ["js", "java","py","cpp","c"];

for (const key in programming) {
//  console.log(key) //array starts from 0 so this accsess indexes of array
//  console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("US", "America");
map.set("AUS", "Australia");
map.set("ENG", "England");
map.set("IN", "India");

for (const key in map) {
    console.log(key)
}