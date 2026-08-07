// OOPS in JS : Object Oriented Programming :

// Object Prototypes in OOP: 
// mechanism by which javascript objects inherits features from one another. It's like a single template object that all objects inherits methods and properties from without having their own copy.

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr1.sayHello = () => {
//     console.log("Hello i am arr");
// };

// arr2.sayHello = () => {
//     console.log("Hello i am arr");
// };

// console.log(arr1.sayHello() === arr2.sayHello());

// console.log(arr1.push(4));
// console.log(arr1);
// arr1.sayHello();

// console.log(arr1.__proto__);                  // to access the array prototype reference objects.

// console.log(arr1.__proto__.push = (n) => {
//     console.log("Pushing new element :", n);
// });

// console.log(arr1.push(5));

// console.log(Array.prototype);               // to access actual prototype of Array.
// console.log(String.prototype);              // to access actual prototype of String.


// Factory Functions in JS : A function that creats objects.

// function personMaker(name, age) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hi everyone my name is ${this.name} and my age is ${this.age}`);
//         }
//     };
//     return person;
// }

// let p1 = personMaker("Hilal", 20);
// console.log(p1);
// p1.talk();

// let p2 = personMaker("Ali", 22);
// console.log(p2);
// p2.talk();


// New Operator in JS : lets developers to create an instance of a user-defined object type or of one the built-in object types that has a constructor function.
// Constructors : does't return anything & start with capital letter.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk() = function() {
//     console.log(`Hi everyone my name is ${this.name} and my age is ${this.age}`);
// };

// let p1 = new Person("hilal", 20);
// let p2 = new Person("ali", 22);


// Classes in JS : class is a template for creating objects.

// class Person {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//     }

//     talk() {
//         console.log(`Hi everyone my name is ${this.name} and my age is ${this.age}`);
//     }
// }


// let p1 = new Person("hilal", 20);
// let p2 = new Person("ali", 22);

// console.log(p1);
// console.log(p2);


// Inheritance in OOP in JS : using "extends" and "super" Keywords.

// class Person {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//     }

//     talk() {
//         console.log(`Hi everyone my name is ${this.name} and my age is ${this.age}`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, marks) {
//         super(name, age);             // calling the Parent class Constructor.
//         this.marks = marks
//     }
// }

// class Teacher extends Person{
//     constructor(name, age, subject) {
//         super(name, age);              // calling the Parent class Constructor.
//         this.subject = subject
//     }
// }


// let student1 = new Student("hilal", 20, 88.9);

// console.log(student1);
// student1.talk();


// let teacher1 = new Teacher("ibrar", 40, "CC&N");

// console.log(teacher1);
// teacher1.talk();


























































