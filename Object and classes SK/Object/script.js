const student ={
    fullName: "Aman Gupta",
    marks: 82.99,
    displayMarks : function (){
        console.log("marks = ", this.marks);
    },
};


const employee =  {
    calTax(){
        console.log("Tax is 10%");
    }
}

const aman ={
    id: 11,
    salary:50000,
    calTax(){
        console.log("Tax is 20%");
    }
};
const aman2 ={
    id: 12,
    salary:23000
};
const aman3 ={
    id: 13,
    salary:23000
};
const aman4 ={
    id: 14,
    salary:23000
};

aman.__prototype__ = employee;
aman2.__prototype__ = employee;
aman3.__prototype__ = employee;
aman4.__prototype__ = employee;