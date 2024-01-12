class MyCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new MyCar();
fortuner.setBrand = "Toyota Fortuner";
let thar = new MyCar();
thar.setBrand = "Mahindra";
let volvo = new MyCar();
volvo.setBrand = "XC 90";

// ----------Inheritance------------

class Parent{

    constructor(){
        console.log("Enter parent constructor");
        this.species = "homo sepiens";
    }

     eat(){
        console.log("i eat");
    }

    // sleep(){
    //     console.log("i am going to sleep");
    // }
}
class Engeneer extends Parent{

    constructor(branch){
        console.log("Enter child constructor");
        super();  // to invoke parents class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }

    work(){
        console.log("My work is to develop web apps");
    }
}

// class Doctor extends Parent{
//     work(){
//         console.log("My work is to help sick people");
//     }
// }

let obj = new Engeneer("Chemical Engineer");
// let obj = new Engeneer();