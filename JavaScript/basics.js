// Template Literals in JS:

// let pene3ile = 10;
// let eraser = 10;
// console.log("The total price is ", pencile + eraser ,"Rupess.");
// console.log(`The total price is ${pencile + eraser} Rupess.`);             // Template literals....


// Operators in JS:

// 1. Arthematic Operators:

// let a = 12;
// let b = 60;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// 2. Unary Operators:

// let a = 12;
// let b = 60;
// console.log(a++);
// console.log(++a);

// 3. Assignment Operators:

// let a = 12;
// let b = 60;
// b = a;
// console.log(b);


// 4. C omparison Operator: 

// let age = 18;
// console.log(age > 28);
// console.log(age >= 28);
// console.log(age < 28);
// console.log(age <= 28);
// console.log(age == 28);
// console.log(age != 28);
// console.log(age === 28);


// Conditional Statements in JS:

// 1. if-else statement:

// let age = 15;
// if(age >= 18) {
//     console.log("You can vote");
// }
// if(age < 18) {
//     console.log("You can't vote");
// }
// console.log("Okay Thanks....")

// P Question:

// console.log("Traffic Light System.")

// let color = "Yellow";
// if(color == "Red") {
//     console.log("Stop....");
// }
// if(color == "Yellow") {
//     console.log("Slow Down....");
// }
// if(color == "Green") {
//     console.log("Go....");
// }

// console.log("Traffic Light System.")

// let color = "Green";
// if(color == "Red") {
//     console.log("Stop....");
// }
// else if(color == "Yellow") {
//     console.log("Slow Down....");
// }
// else if(color == "Green") {
//     console.log("Go....");
// }

// console.log("Traffic Light System.")

// let color = "g";
// if(color == "Red") {
//     console.log("Stop....");
// }
// else if(color == "Yellow") {
//     console.log("Slow Down....");
// }
// else if(color == "Green") {
//     console.log("Go....");
// }
// else {
//     console.log("The traffic light is broken.")
// }

// P Question:

// let size = "M";

// if(size == "XL") {
//     console.log("The price is 250 Rupees.");
// }
// else if(size == "L") {
//     console.log("The price is 200 Rupees.");
// }
// else if(size == "M") {
//     console.log("The price is 100 Rupees.");
// }
// else if(size == "Se") {
//     console.log("The eprice is 50 Rupees.");
// }
// else {
//     console.log("This size is not available..")
// }


// Logical Operators in JS:

// 1. AND Opeartor:

// let a = 10;

// if(a >= 26 && a <= 16) {
//     console.log("Okay thanks.........")
// } else {
//     console.log("Not Okay.............")
// }

// 2. OR Operator: 3. NOT Operator:

// let a = 10;

// if(a >= 26 || a <= 16) {
//     console.log("Okay thanks.........")
// } else {
//     console.log("Not Okay.............")
// }

// false, 0, -0, "".empty string, null, undefined, NaN... these all have Falsy value in JavaScript and other then these they have Truthy value in JavaScript.
 
// Switch Statement in JS:

// let size = "N";

// switch(size){
//     case "XL":
//         console.log("The price is 250 Rupees.");
//         break;
//     case "L":
//         console.log("The price is 200 Rupees.");
//         break;
//     case "M":
//         console.log("The price is 100 Rupees.");
//         break;
//     case "Se":
//         console.log("The eprice is 50 Rupees.");
//     default:
//         console.log("This size is not available..");
// }

// P Question:

// let day = 8;

// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("You do you think....");
// }

// Alerts in JS:

// alert("something is wrong!");

// Errors in JS:

// console.error("This is an error");

// Warning in JS:

// console.warn("This is an warning");

// Prompts in JS:

// let name = prompt("Enter your name please");
// console.log(name);


// String Methods:                // string are immutable in JS... 

//let str = "   Muhammad Hilal   ";

// console.log(str.trim());                       // Trim method: this method remove spaces from both ends and give a new string instead of changing existing one.
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf("Hilal"));
// console.log(str.indexOf("m"));

// Method Chaining:                         to use multiple methods on single string.

// let name = "   Muhammad Hilal   ";
// let newName = name.trim().toUpperCase();   // this is method chaining.
// console.log(newName);


// let newName = name.trim();
// console.log("After trim :", newName);
// newName = newName.toUpperCase();
// console.log("After converting to Uppercase :", newName);

// let name = "Muhammad Hilal";
// let new1 = name.slice(0, 8);             // Slice method: this method use to cut a part of the existing string.
// let new2 = name.slice(8, name.length);
// console.log(new1);
// console.log(new2);

// let name = "Muhammad Hilal";
// let new1 = name.replace("Hilal", "Khan");
// let new2 = name.repeat(72);

// console.log(new1);
// console.log(new2);


// Array Data Structure in JS:                 Array are Mutable in JS.

// let students = ["Ahmad", "Ali", "Adil"];
// let marks = [89, 98, 78, 87];
// let info = ["Ali", 22, 89.9];

// console.log(students);
// console.log(marks);
// console.log(info);

// let students = ["Ahmad", "Ali", "Adil"];
// students[1] = "Hilal";

// console.log(students);

// Array Methods in JS:  1.push, 2.pop, 3.unshift, 4.shif

// let students = ["Ahmad", "Ali", "Adil", "Atta"];
// students.push("Muahhmad");
// students.push("Hilal");

// students.pop();
// students.pop();

// students.unshift("Muahhmad");         // add elements in the start of the array.
// students.unshift("Hilal");

// students.shift("Hilal");
// students.shift("Hilal");              // remove elements form the start of the array.

// console.log(students);


// P Question.

// let arr = ["january", "july", "march", "august"];

// arr.shift();
// arr.shift();

// arr.unshift("june");
// arr.unshift("july");

// console.log(arr);

// let arr = ["january", "july", "march", "august"];
// let n1 = arr.indexOf("march");
// let n2 = arr.indexOf("april");

// let n3 = arr.includes("march");
// let n4 = arr.includes("april");

// console.log(arr);
// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);

// let months = ["january", "july", "march", "august"];
// let students = ["Ahmad", "Ali", "Adil", "Atta", "january", "july", "march", "august"];

// let finalArr = months.concat(students);                      //concatenation method...
// let reverse = months.reverse();                             // reverse method.....
// let slice = students.slice();                               // slice method......
// let slice = students.slice(2);
// let slice = students.slice(2, 5);
// let slice = students.slice(-3);

// console.log(finalArr);
// console.log(reverse);
// console.log(slice);


// let months = ["january", "july", "march", "august", "june", "september", "octobar"];
// console.log(months.splice(3));                            // splice method: syntax is : splice(strating index, deleteCount, add item0...itemN);
// months.splice(1, 0, "Febuary");
// months.splice(1, 1, "Febuary");
// console.log(months);

// let months = ["january", "febuary", "july", "march", "august", "june", "september", "octobar"];
// console.log(months.sort());                               // sort method...

// P Questions:

// let arr = ["january", "july", "march", "august"];
// arr.splice(0, 2, "july", "june");
// console.log(arr);

// let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "SQL"];
// console.log(lang.reverse().indexOf("javascript"));


// Array Refrences : which means address in memory.

// let arr = ["a", "b", "c"];

// let arrCopy = arr;

// console.log(arr === arrCopy);     // in this condition it will return True.
// console.log(arr == arrCopy);     // in this condition it will return True.


// Constant Arrays in JS:

// const arr = [1, 2, 3, 4, 5];     // constant array means we make constant the addresses of the elements not the elements because in constant mode we can add and remove elements form an array. 

// Nested Arrays in JS:

// let multArr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// console.log(multArr);

// console.log(multArr[0]);
// console.log(multArr[1]);
// console.log(multArr[2]);

// console.log(multArr[0][1]);


// P Questions:

// let game = [ ["X", null, "O"], [null, "X", null], ["O", null, "X"]];
// game[0][1] = "O";
// console.log(game);


// LOOPs in JS:

// 1. for loop:

// for(let i=0; i<=5; i++){
//     console.log(i);
// }

// for(let i=5; i>=0; i--){
//     console.log(i);
// }

// for(let i=1; i<=15; i+=2){              // print odd numbers.
//     console.log(i);
// }

// for(let i=2; i<15; i+=2){             // print even numbers.
//     console.log(i);
// }

// for(let i=1; ; i++){                     // Infinite loop.       
//     console.log(i);
// }

// let n = prompt("Enter a number for it's multiplication table.")
// n = parseInt(n);
                                 
// for(let i=n; i<=n*10; i+=n){                 // for multiplication table of a number.
//     console.log(i);
// }

// Nested for loop:

// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


// 2. While Loop in JS:

// let i = 0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i = 5;
// while(i>=0){
//     console.log(i);
//     i--;
// }

// Guess Game.

// let favMovie = "Avengers";
// let guess = prompt("Enter the fav movie name you guess.");

// while(guess != favMovie && guess != "Quit"){
//     guess = prompt("Wrong movie name.. Please try again");
// }

// if(guess == favMovie){
//     console.log(`Congrulation your Guess is write ${favMovie} is the fav movie.`);
// }else {
//     console.log("you Quit the game.")
// }

// break Keyword in loops:

// let i = 0;
// while(i<=5){
//     if(i == 4){
//         break;
//     }
//     console.log(i);
//     i++;
// }


// Loops with Arrays:

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }


// Loops with Nested-Arrays:

// let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j = ${j}, ${heroes[i][j]}`); 
//     }
// }


// 3. for-of loop in JS:

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "Muhammad Hilal"){
//     console.log(char);
// }


// Nested for-of loop:

// let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];

// for(array of heroes){
//     console.log(array);
//     for(hero of array){
//         console.log(hero);
//     }
// }


// To-Do App using JS:

// let todo = [];

// let req = prompt("Enter your request.");
// console.log(req);

// while(true){
//     if(req == "quit"){
//         console.log("Thanks for using our app you are quiting.");
//         break;
//     }

//     if(req == "list"){
//         console.log("---------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("---------");
//     } 
//     else if(req == "add"){
//         let task = prompt("Enter the task you want to add.");
//         todo.push(task);
//         console.log("task added successfuly.");

//     }
//     else if(req == "delete"){
//         let idx = prompt("Enter the task index you want to delete.");
//         todo.splice(idx, 1);
//         console.log(`The ${idx} task is deleted succedssfully.`);
//     }
//     else {
//         console.log("Wrong request.");
//     }
//     req = prompt("Enter your request");
// }


// Objects Literals in JS:

// const student = {
//     name : "Hilal",
//     age : 20,
//     address : "Mardan",
//     marks : 92.6
// }
// console.log(student);

// console.log(student.name);              // access the object literals key values pair using dot operator.
// console.log(student.address);
// console.log(student.marks);


// const post = {
//     username: "@Abc123",
//     content : "This is my first project.",
//     likes : 157,
//     repost : 6,
//     tags : ["@hilal", "@uetmadan"]
// }
// console.log(post);

// console.log(post["content"]);           // access the object literals key values pair using sqaure brackets operator.
// console.log(post["tags"]);
// console.log(post["likes"]);


// Adding, deleting and Updating values in Object literals:

// const student = {
//     name : "Hilal",
//     age : 20,
//     city : "Mardan",
//     marks : 92.6
// }
// student.city = "Peshawer";       // Updated...
// student.marks = "A";
// student.gender = "Male";        // new key value pair is added...

// delete student.marks;           // key value pair is deleted...
// delete student.gender;

// console.log(student);


// Nested Object Literals :

// const classInfo = {
//     Hilal : {
//         age : 20,
//         marks : 72
//     },
//     Baryal : {
//         age : 22,
//         marks : 87 
//     },
//     Mujeeb : {
//         age : 20,
//         marks : 94
//     },
//     Shayan : {
//         age : 19,
//         marks : 84
//     }
// }

// classInfo.Mujeeb.city = "lower Dir";

// console.log(classInfo);
// console.log(classInfo.Mujeeb);


// Object literals with Arrays :

// const classInfo = [
//     {
//         name : "Hilal",
//         age : 20,
//         marks : 72
//     },
//     {
//         name : "Baryal",
//         age : 22,
//         marks : 87 
//     },
//     {
//         name : "Mujeeb",
//         age : 20,
//         marks : 94
//     },
//     {
//         name : "Shayan",
//         age : 19,
//         marks : 84
//     }
// ];

// classInfo[0].city = "mardan";

// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[1].name);


// Math Object in JS :

// console.log(Math.PI);
// console.log(Math.E);

// Math Methods :

// let a = -72;
// let b = 2;
// let c = 7.9986775657656;
// console.log(Math.abs(a));         // Absolute method...
// console.log(Math.pow(a, b));      // calculate power...
// console.log(Math.floor(c));       // round of number to nearest smallest integer value..
// console.log(Math.ceil(c));        // round of number to nearest largest integer value..
// console.log(Math.random());       // give a random number between 0 - 1 every time to execute...
// console.log(Math.random());


// Generating differents numbers in differnet ranges form Math.random(); Method :


// let num1 = Math.random();
// let num2 = num1 * 10;
// let num3 = Math.floor(num2);             // step by step processs of generating integers numbers..
// let num4 = num3 + 1;

// console.log(num4);

// let gen = Math.floor( Math.random() * 100) + 1;
// console.log(gen);                                // generating integers numbers in single line code ..


// p Question:

// let num = Math.floor(Math.random() * 100) + 1;     // generatin number b/w 1 --- 100.
// console.log(num);
 
// let num = Math.floor(Math.random() * 5) + 1;       // generatin number b/w 1 --- 5.
// console.log(num);

// let num = Math.floor(Math.random() * 5) + 20;         // generatin number b/w 20 --- 25.
// console.log(num);



// Guessing Game using JS :

// const max = prompt("Enter a max number.");

// const random = Math.floor( Math.random() * max ) + 1;

// let guess = prompt("Guess the number.");

// while(true) {
//     if (guess == "quit"){
//         console.log("you quit the game.");
//         break;
//     } 

//     if(guess == random){
//         console.log("congratulation !! you are right. random mumber is", random);
//         break;
//     }
//     else if(guess < random) {
//         guess = prompt("Hint : your guess number is small. please try agian!");
//     } 
//     else {
//         guess = prompt("Hint : your guess number is large. please try agian!");
//     }
// }


// Functions in JS :

// function hello(){
//     console.log("Hello World!");
// }
// hello();

// function printpoem(){
//     console.log("Twinkle Twinkle, little star");
//     console.log("how i wonder what you are");
// }

// printpoem();
// printpoem();
// printpoem();
// printpoem();
// printpoem();

// function roolDice() {
//     let num = Math.floor(Math.random() * 6) + 1;
//     console.log(num);
// }

// roolDice();

// Functions with Arguments :

// function printName(name, age) {
//     console.log(`${name} age is ${age}`);

// }

// printName("bilal", 28);
// printName("jalal", 24);
// printName("hilal", 20);

// function average(a, b, c) {
//     let avg = (a + b + c) / 3;
//     console.log(avg);
//     // console.log(`Average of these three numbers is : ${a + b + c / 3}`);
// }

// average(3, 3, 3);

// function printTable(n) {
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }

// printTable(2);
// printTable(70);
// printTable(22);


// return Key word in functions:

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(2, 70));
// console.log(sum(sum(2, 4), 6));

// function sumOfNumbers(n) {
//     let sum = 0;

//     for(let i=0; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumOfNumbers(10));

// let str = ["Muh", "ammad", " ", "Hi", "lal."];

// function concat(str) {
//     let result = "";

//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }

//     return result;
// }

// console.log(concat(str));


// Scope in JS:

// 1. Function Scope : variables of the function only accessible inside the function not outside the function. 
// 2. Global Scope : variables that accessible anywhere in the file that called global scope.
// 3. Block Scope : variables declared inside a { } block can't be accessed from outside the block.
// 4. Lexical Scope (for nested functions): variable defined outside a function can be accessible inside another function defined after the variable declaration. But opposite is NOT true.

// function outer(){
//     let x = 6;
//     let y = 66;
//     function inner() {
//         console.log(x);     // lexical Scope..

//     }
//     inner();
// }
// outer();


// let greet = "Hi";  // Global Scope.

// function changeGreet() {
//     let greet = "Hello";  // function Scope.
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet);  // lexical Scope.
//     }

//     innerGreet();
// }

// console.log(greet);
// changeGreet();


// Function Expression in JS:   a nameless functions that have a variable.

// let sum = function(a, b) {
//     return a + b;
// }

// console.log(sum(2, 70));


// High Order functions in JS:  a function that take another function as paremmter. like the multipleGreet();

// function multipleGreet(func, n) { 
//     for(let i=0; i<n; i++){
//         func();
//     }
// }
// let  greet = function() {
//     console.log("hi");
// }

// multipleGreet(greet, 5);
// multipleGreet(function hello(){console.log("My name is plankay..")}, 5);


// High Order functions: is a function that returns a function.

// function functionsFactory(request) {
//     if(request == "odd") {
//         return function(n){
//             console.log(n%2 != 0);
//         }
//     }
//     else if(request == "even") {
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     }
//     else {
//         console.log("wrong request.")
//     }
// }
// let request = "odd";
// let func = functionsFactory(request);
// func(73);

// let request = "even";
// let func = functionsFactory(request);
// func(73);
// func(100);


// Methods : the functions that defined inside an object called Methods.

// const calculator = {
//     num : 55,
//     add : function(a, b){
//         return a + b;
//     },
//     sub : function(a, b){
//         return a - b;
//     },
//     mul : function(a, b){
//         return a * b;
//     }

// };

// console.log(calculator);
// console.log(calculator.add(66, 6));

// shorthand for Methods :

// const calculator = {
//     add(a, b){
//         return a + b;
//     },
//     sub(a, b){
//         return a - b;
//     },
//     mul(a, b){
//         return a * b;
//     }
// };

// console.log(calculator);


// this Keyword in JS:

// const student = {
//     name : "hilal",
//     age : 21,
//     eng : 87,
//     math : 92, 
//     phy : 89,
//     grtAvg() {
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// student.grtAvg();
// console.log(student);


// try and catch in JS :

// console.log("hello");
// console.log("hello");
// console.log("hello");

// // console.log(a);

// try {
//     console.log(a);
// } catch {
//     console.log("a is not defined.");
// }

// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


// Arrow functions :

// const sum = (a, b) => {
//     console.log(a + b);
// }
// sum(2, 4);

// Arrow functions : with implicit return :

// const mul = (a, b) => (a * b);
// console.log(mul(2, 4));

// const cube = (n) => (n*n*n);
// console.log(cube(2));


// Set Timeout Function in JS :

// console.log("hi, there!");

// setTimeout(() => {
//     console.log("UET Mardan");
// }, 4000);

// console.log("welcome to");


// Set Interval function in JS : a function that execute and execute after that intrval and don't stop by self, then we need to stop it explicitly using statement.

// let id1 = setInterval(() => {
//     console.log("Welcom to");
// }, 2000);

// console.log(id1);

// let id2 = setInterval(() => {
//     console.log("UET Mardan");
// }, 3000);

// console.log(id2);

// clearInterval(id1);
// clearInterval(id2);


// this keyword with Arrow functions :

// const student = {
//     name : "hilal",
//     marks : 96,
//     prop : this,
//     getName : function() {
//         console.log(this);
//         return this.name;
//     },
//     getmarks : () => {
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1 : function() {
//         setTimeout(() => {
//             console.log(this);
//         }, 2000)
//     },
//     getInfo2 : function() {
//         setTimeout(function() {
//             console.log(this);
//         }, 2000)
//     }
// };
// console.log(student);
// console.log(student.getName());
// console.log(student.getmarks());

// console.log(student.getInfo1());
// console.log(student.getInfo2());

// P Questions :

// const sqaure = (a) => (a*a);
// console.log(sqaure(4));

// let id = setInterval(() => {
//     console.log("Hello world!");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Time is out !");
// }, 10000);


// Array methods :

// 1. forEach method :

// let arr = [1, 2, 3, 4, 5];

// let print = function(el) {
//     console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function(el) {
//     console.log(el);
// });

// let arr = [
//     {
//     name : "hilal",
//     marks : 87
//     },
//     {
//     name : "ah7mad",
//     marks : 86
//     }, 
//     {
//     name : "ghfaf",
//     marks : 98
//     }
// ]

// arr.forEach( (student) => {
//     console.log(student.marks);
// });

// 2. map method :

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el * 2;
// })

// console.log(double);

// 3. filter method :

// let num = [1, 2, 3, 4, 5, 8, 9, 12, 14, 10];

// let ans = num.filter((el) => {
//     return el % 2 == 0;
//     return el % 2 != 0;

// });

// console.log(ans);

// 4. every method :

// let arr = [2, 4, 6, 8, 10, 11];
// let ans = arr.every((el) => {
//     return el % 2 == 0;
// });

// console.log(ans);


// 5. reduce method :

// let arr = [1, 2, 3, 4];
// let result = arr.reduce((res, el) => {
//     console.log(res);
//     return res + el ;
// });

// console.log(result);


// let arr = [1, 4, 2, 5, 6, 7, 8, 9, 10];

// let max = 0;
// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((max, el) => {
//     if(max < el){
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);


// P Question :

// let nums = [10, 20, 30, 40];

// let ans = nums.every((el) => {
//     return el % 10 == 0;
// });

// console.log(ans);

// let nums = [10, 20, 30, 40, 1, 0];

// let ans = nums.reduce((min, el) => {
//     if(min < el){
//         return min;
//     } else {
//         return el;
//     }
// });

// console.log(ans);


// Default Parameters :

// function fun(a, b = 70) {
//     return a + b;
// }

// console.log(fun(2));


// Spread in JS :

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// let str = "Muhammad Hilal";

// console.log(str);
// console.log(...str);


// spread with arrays :

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let newArr = [...arr];
// newArr.push(6, 7, 8);
// console.log(newArr);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];

// console.log(nums);


// spread with objects :

// const data = {
//     email : "@uetmardan.edu.pk",
//     password : "abcdefg"
// };
// console.log(data);

// const copyData = {
//     ...data,
//     username : "hilal",
//     id : 123
// };
// console.log(copyData);


// Rest in JS : opposite of spread. add or merege two objects or arrays etc 

// function sum(...args) {
//     for(let i = 0; i < args.length; i++) {
//         console.log("you give us :", args[i]);
//     }
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// } 

// console.log(sum(1, 2, 3, 4));


// Destructuring in JS with Arrays :

// let names = ["hilal", "ahmad", "adil", "akmal"];

// let [winner, runnerup, ...others] = names;


// console.log(winner);
// console.log(runnerup);
// console.log(others);


// Destructuring with objects :

// const student = {
//     name : "hilal",
//     age : 20,
//     class : 12,
//     subjects : ["urdu", "english", "maths", "phy"],
//     username : "@hilal4467",
//     password : "abcde"
// };

// let {username, password} = student;
// console.log (username);
// console.log (password);

















































































































