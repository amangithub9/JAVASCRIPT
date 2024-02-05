// function add(a, b, ...other) {
//   console.log(a + b);
//   let sum = 0;
//   for (const key of other) {
//     sum = sum + key;
//   }
//   console.log(sum);
// }
// add(1, 2, 3, 3, 4, 5);

function arr(...myArray) {
  return myArray;
}
console.log(arr("ayush", "aur"));
console.log(arr("aman", "cricket", "khelte", "hai"));
