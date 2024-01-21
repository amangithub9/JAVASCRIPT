const promiseOne = new Promise(function (resolve, reject) {
    // Do an Async task
    // DB Calls, Cryptography

    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
});

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {   // we did't initialized new promise
    setTimeout(function () {
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Task 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function () {
        // console.log("Async Task 3");
        resolve({ username: "Chai", email: "chai@exapmle.com" });
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
});


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username: "Aman", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('ERROR: Javascript went wrong')
        }
    },1000);
})

// async function consumedPromiseFive(){
//     const responce = await promiseFive
//     console.log(responce);
// }
// consumedPromiseFive();

async function consumedPromiseFive(){
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error)
    }
}

consumedPromiseFive();

/*
!----- using try catch method
 
async function getAllUsers(){
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(responce);
        const data = await responce.json();
        console.log(data);
    } catch (error) {
        console.log("Error :",error)
    }
}

getAllUsers();

*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) => {
    return responce.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error) => {
console.log(error);
})