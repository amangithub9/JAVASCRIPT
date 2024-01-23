const user = {
    username : "aman",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from user")
        console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, logInCount, isLogedIn ){
        this.username = username;
        this.logInCount = logInCount;
        this.isLogedIn = isLogedIn;

        this.greeting = function(){
            console.log(`Welcome ${this.username}`);
        }
        return this;
}

const userOne = new User("aman", 11, true);
const userTwo = new User("chaiAurcode", 10, false);
console.log(userOne);
console.log(userTwo);