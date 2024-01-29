// const math = Math.PI;
// console.log(math);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);    


const chai = {
    name: 'Ginder Tea',
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("chai nhi ban pai")
    }
}

// console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name',{
    // writable : false,
    enumerable: true,
    // configurable: false,
    // itrateable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key} :${value}`)
}