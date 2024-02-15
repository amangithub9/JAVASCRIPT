const myNum = [1,2,3,4,5,6,7,8,9,10];

const newNum = myNum.map ( (num) =>{
    return num + 10;
})

console.log(newNum);

/* ######       Chaining        ############ */

const myNumber = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumber
                .map( (num) => num * 10)  // map chaining which is used very often nad we can use map in multiple times.
                .map( (num) => num + 1)
                .filter( (num) => num >= 30)

console.log(newNums);