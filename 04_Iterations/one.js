/* For of Loop In javascript*/

["", "", ""][({}, {}, {})];

const myArray = [1, 2, 3, 4, 5];

for (const num of myArray) {
    console.log(num);
}

const greeting = "hello world";

for (const greet of greeting) {
    console.log(greet);
}

const map = new Map();
map.set("IN", "India");
map.set("US", "America");
map.set("AUS", "Australia");
map.set("ENG", "England");
map.set("IN", "India"); // it cant access because map have unique value
console.log(map);

for (const [key, value] of map) {
  console.log(key + ":-" + value);
    console.log(key);
    console.log(value);
}

const myObject = {
  name: "Virat Kohli",
  profession: "Cricketer",
  salary: "200Million",
};

// for (const [key, value] of myObject) {
//      console.log(myObject[key, value]) // for of wont work with objects
// }
