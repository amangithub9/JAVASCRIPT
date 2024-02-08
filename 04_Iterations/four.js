const coding = ["CPP", "Java", "Javascript", "Python", "Ruby"];

const values = coding.forEach((item) =>{
    // console.log(item);
    return item; // forEach do not return any values.
});
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const number = myNums.filter((num) => num > 6);
console.log(number);


const numner1 = myNums.filter((num) => {
    return num < 8  // in that case u need to return explecityly because u use function scope and a scope fn need to be returned!

});
console.log(numner1);

const number2 = [];

myNums.forEach( (num) =>{
    if(num > 4){
        number2.push(num);
    }
})
console.log(number2);