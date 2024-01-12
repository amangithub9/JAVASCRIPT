class Person {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  class Student extends Person {
    constructor(id, name, age, course) {
      super(id, name);
      this.age = age;
      this.course = course;
    }
  }
  
  class Teacher extends Person {
    constructor(id, name, subject) {
      super(id, name);
      this.subject = subject;
    }
  }
  
  class Admin extends Person {
    constructor(id, name, role) {
      super(id, name);
      this.role = role;
    }
  }
  
  // Sample data
  let students = [
    new Student(1, 'John Doe', 20, 'Computer Science'),
    new Student(2, 'Jane Smith', 22, 'Physics'),
    // Add more student records as needed
  ];
  
  let teachers = [
    new Teacher(101, 'Professor Johnson', 'Mathematics'),
    new Teacher(102, 'Dr. Williams', 'Chemistry'),
    // Add more teacher records as needed
  ];
  
  let admin = new Admin(1001, 'Admin User', 'Administrator');
  
  // Example functions to interact with the database
  
  // Get all students
  function getAllStudents() {
    return students;
  }
  
  // Get student by ID
  function getStudentById(studentId) {
    return students.find(student => student.id === studentId);
  }
  
  // Get all teachers
  function getAllTeachers() {
    return teachers;
  }
  
  // Get teacher by ID
  function getTeacherById(teacherId) {
    return teachers.find(teacher => teacher.id === teacherId);
  }
  
  // Get admin information
  function getAdminInfo() {
    return admin;
  }
  
  // Example usage
  console.log('All Students:', getAllStudents());
  console.log('Student by ID:', getStudentById(1));
  console.log('All Teachers:', getAllTeachers());
  console.log('Teacher by ID:', getTeacherById(101));
  console.log('Admin Info:', getAdminInfo());
  