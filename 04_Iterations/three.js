const coding = ["js", "py", "java", "cpp", "r"];

coding.forEach((e) => {
  console.log(e)
});

const sports = ["cricket", "football", "badminton", "boxing", "mma"];
sports.forEach(function (val) {
  console.log(val);
});

const food = ["butter panner", "aloo paratha", "roti", "halwa", "rasgoola"];
food.forEach((item) => {
  console.log(item);
});

const map = new Map();
map.set("IN", "India");
map.set("US", "America");
map.set("AUS", "Australia");
map.set("ENG", "England");
map.set("IN", "India");

map.forEach((value) => {
  console.log(value);
});
map.forEach((key,value) => {
  console.log(key,value);
});
map.forEach((key) => {
  console.log(key);
});

const car = ["mustang", "bmw", "swift", "xuv 700", "mini cooper"];

function printme(element) {
  console.log(element);  // u can use seperate function as well
}
car.forEach(printme);


const pen = ["ball pen","fountain pen","likho feko"];

pen.forEach( (item, index, arr)=>{
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"  
    },
    {
        languageName: "cpp",
        languageFileName: "c"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName)
    console.log(item.languageFileName)
})