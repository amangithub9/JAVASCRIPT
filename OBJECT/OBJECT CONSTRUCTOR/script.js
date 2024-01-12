

function Student(first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age  = age;
    this.class = cls;
}

Student.prototype.salary = 20000; // construtor adding properties

var student1 = new Student("Aman", "Gupta", 22, "BCA");
var student2 = new Student("Sujata", "Singh", 22, "BCA");
var student3 = new Student("Raja", "Gupta", 22, "BCA");
var student4 = new Student("Gaurav", "Singh", 22, "BCA");

student1.nationality = "Indian"; // this object adding phenomema called direct addition but if u want to add properties in construtor then use " .PROTOTYPE + (NAME)" outside of the constructor this is called dynamically addition.
student2.virginity = "Yes";
student3.gender = "Male/Female";

student1.name = function(){
    return this.firstName + " "+ this.lastName;
}

console.log(student1);
// console.log(student1.salary);
// console.log(student1.name());
// console.log(student2);
// console.log(student3);
// console.log(student4);


/*
NESTED OBJECT
*/