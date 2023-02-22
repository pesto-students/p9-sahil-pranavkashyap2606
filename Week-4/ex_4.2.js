// Method 1
// class Person{
//     constructor(names,age){
//         this.names = names,
//         this.age = age
//     }
// }
// class Teacher extends Person{
//     constructor(names,subject){
//         super(names);
//         this.subject = subject;
//     }
//     teach() {
//         console.log(`${this.names} is now teaching ${this.subject}`)
//     }
// }
// var teacher = new Teacher('Adam', 'Sci');
// teacher.teach();

// Method 2
var Person = function () {};

Person.prototype.initialize = function (names, age) {
  this.names = names;
  this.age = age;
};

function Teacher() {}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(this.names + " is now teaching " + subject);
};

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Sci");