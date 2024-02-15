const myNumber = [1, 2, 3];

// const myTotal = myNumber.reduce(function (accumulator, currentValue) {
//         console.log(` acc : ${accumulator} and curr: ${currentValue}`)
//         return accumulator + currentValue;
// },0)
// console.log(myTotal);

const myTotal = myNumber.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
const myTotal1 = myNumber.reduce( (accumulator, currentValue) => accumulator + currentValue, 5);

console.log(myTotal);
console.log(myTotal1);

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "py Course",
        price : 999
    },
    {
        itemName : "Java Course",
        price : 1299
    },
    {
        itemName : "web dev Course",
        price : 7999
    },
]

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 0)

const pay = shoppingCart.reduce( (accumulator, item) => {   // function scope method
    return accumulator + item.price
},0)

console.log(pay);
console.log(priceToPay);