// Call Stack in JS :

// function hello() {
//     console.log("Hello this is hello function");
//     console.log("Hello");
// }

// function demo() {
//     console.log("calling hello function from demo .");
//     hello();
// }

// console.log("calling demo function");
// demo();
// console.log("Done Bye!");


// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// Breakpoints in JS : used for errors and Debugging in code.

// 1. Single Threaded Language. 2. Multi Threaded language.
// so JS is Single Threaded Language : this means at a time one work will bw done not multiple.

// setTimeout(function() {
//     console.log("Muhammad Hilal");
// }, 3000);

// console.log("Hello ");

// Programming Natures : 1. Synchronus nature : which means many lines of code executes step by step one after another. 
// 2. Asychronus nature : which means many lines of code execute at a time not neccessary that execute step by step.


// Callback Hell in JS: means the nesting of callbacks in code

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() =>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () =>{
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {                // this is nesting of callbacks which means Callback Hell.
//             changeColor("yellow", 1000, () =>{
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });


// changeColor("orange", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "yellow";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);


// Promises in JS : this is JS Object that helps us to prevents the Callback Hell condition.
// Promises = is an object consist of resolve(success) & reject(failure).


// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success(); 
//     } else {
//         failure();
//     }
// }

// savetoDb("Muhammad Hilal", () =>{
//     console.log("Success : Data is saved.");
//     savetoDb("UET Mardan", () => {
//         console.log("Sucess 2 : Data 2 is saved.");
//         savetoDb("Software Engineer.", () => {
//             console.log("success 3 : Data 3 is saved.");
//         }, () => {
//             console.log("Filure 3 : Week connection 3. data saving failed.")
//         })
//     }, () => {
//         console.log("Failure 2 : Week connection 2. data saving failed.");
//     })
// }, () =>{
//     console.log("Failure all : Week internet connection. data saving failed.");
// });

// using Promises to prevent Callback Hell :

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Success : Data is saved."); 
//         } else {
//             reject("failure : Data is failed.");
//         }
//     });
// }

// let request = savetoDb("UET Mardan");

// Promises Methods : 1. then(); 2. catch();

// request.then(() => {
//     console.log("Promises was resolved.");
//     console.log(request);
// })
// .catch(() => {
//     console.log("Promises was rejected.");
//     console.log(request);
// })


// Promises Chaining : when we use multiple then();.

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Success : Data is saved."); 
//         } else {
//             reject("failure : Data is failed.");
//         }
//     });
// }

// savetoDb("UET Mardan")
// .then(() => {
//     console.log("Data 1 is saved.");
//     return savetoDb("Muhammad Hilal");
// })
// .then(() => {
//     console.log("Data 2 is saved.");
//     return savetoDb("Software Engineer.");
// })
// .then(() => {
//     console.log("Data 3 is saved.");
// })
// .catch(() => {
//     console.log("Promises was rejected.");
// });


// To Print the value of Result(resolved) and Error(rejected) in Promises :

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Success : Data is saved."); 
//         } else {
//             reject("failure : week connection");
//         }
//     });
// }

// savetoDb("UET Mardan")
// .then((result) => {
//     console.log("Data 1 is saved.");
//     console.log("result of promises : ", result);
//     return savetoDb("Muhammad Hilal");
// })
// .then((result) => {
//     console.log("Data 2 is saved.");
//     console.log("result of promises : ", result);
//     return savetoDb("Software Engineer.");
// })
// .then((result) => {
//     console.log("Data 3 is saved.");
//     console.log("result of promises : ", result);
// })
// .catch((error) => {
//     console.log("Promises was rejected.");
//     console.log("error of promises : ", error);
// }); 


// Example of promises : 

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             h1.style.color = color;
//             resolve("Color was Changed !");
//         }, delay);
//     })   
// }

// changeColor("red", 1000)
// .then(() => {
//     console.log("red color was completed !");
//     return changeColor("orange", 1000);
// })
// .then(() => {
//     console.log("orange color was completed !");
//     return changeColor("green", 1000);
// })
// .then(() =>{
//     console.log("green color was completed !");
//     return changeColor("blue", 1000);
// })
// .then(() => {
//     console.log("blue color was completed !");
//     return changeColor("orange", 1000);
// })
// .catch(() => {
//     console.log("Color was rejected !");
// })


// Async Functions : the type of function that should always be return a promises.
// 1. async Keyword :
// 2. await Keyword :


// async function greet() {
//     return "Hello";
// }

// greet()
// .then((result) => {
//     console.log("Promises was resolved");
//     console.log("result was : ", result);
// })
// .catch((err) => {
//     console.log("promises was rejected with err : ", err);
// })


// let demo = async () => {
//     return 5 + 3;
// }

// console.log(demo());


// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }


// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// console.log(demo());


// Example using async and await keywords :

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("Color was Changed !");
//         }, delay);
//     });   
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     changeColor("blue", 1000);
// }

// console.log(demo());


// Handling Rejections with await keyword :

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num > 3) {
//                 reject("Promises was rejected.");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("Color was Changed !");
//         }, delay);
//     });   
// }

// async function demo() {
//     try{
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//     } catch(err) {
//         console.log("error caught");
//         console.log(err);
//     }
    
//     let a = 5;
//     console.log(a);
//     console.log("new number = ", a + 3);
// }

// console.log(demo());



// API in JS : API stand for Application Programming Interface.

// JSON : stand for javaScript Object Notation :

// JSON Methods : 
// 1. JSON.parse(data) : To parse a string data(JSON) into JS object
//  2. JSON.stringify(json) : To parse a JS object into JSON.

// let jsonResp = '{"message":"https://images.dog.ceo/breeds/keeshond/n02112350_7157.jpg","status":"success"}';
// let validResp = JSON.parse(jsonResp);
// console.log(validResp.status);

// let jsonResp = '{"message":"Hello\\nWorld","status":"success"}';
// let validResp = JSON.parse(jsonResp);
// console.log(validResp);

// let student = {
//     name : "HILAl",
//     age : 20,
//     city : "Mardan",
//     marks : 87
// }

// let json = JSON.stringify(student);
// console.log(json);

// let jsonResp = '{"userId": 1,"id": 5,"title":"they do not know what they hate","body":"repudiation seeks forgiveness but others or flees is but \\n but is pleasure all we can be pleasures who or is held by pain nor"}';
// let validResp = JSON.parse(jsonResp);
// console.log(validResp);

// Testing API Requests using Tools : 

// Ajax : stand for Asynchronous javaScript and XML : this mean API work asynchronously.


// our First API Request :
// res.json() method : to convert the data into readable form .

// let url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();                        
// })
// .then((data1) => {
//     console.log("data1 = ", data1[0].title);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 = ", data2[10].title);
// })
// .catch((err) => {
//     console.log("This is Error : ", err);
// });



// our First API Request : now using async and await keywords :

// let url = "https://jsonplaceholder.typicode.com/posts";

// async function getFacts() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
// }

// console.log(getFacts());


// using Axios Library to Make HTTP request :

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
    
//     let para = document.querySelector("#result");
//     para.innerText = fact;
// });


// let url = "https://jsonplaceholder.typicode.com/posts";
// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data[12].title;
//     } catch (e) {
//         console.log("Error - ", e);
//         return "No title found";
//     }
// }

// console.log(getFacts());


// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click", async () => {
//     let link = await getImage();

//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// });

// async function getImage() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("Error - ", e);
//         return "No image found";
//     }
// }

// console.log(getImage());


// Sending Headers with Axios :

// const url = "https://dog.ceo/api/breeds/image/random";

// async function getImage() {
//     try {
//         const head = { headers: { Accept: "Application/json"} };      // this is header which we pass with URL.
//         let res = await axios.get(url, head);
//         console.log(res.data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// console.log(getImage());


// Updating Query Strings with Axios :

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let uniArr = await getUni(country);
//     console.log(uniArr);

//     show(uniArr);
// });

// function show(uniArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";

//     for(uni of uniArr) {
//         console.log(uni.name);

//         let li = document.createElement("li");
//         li.innerText = uni.name;
//         list.appendChild(li);
//     }
// }


// async function getUni(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;
//     } catch (err) {
//         console.log(err);
//         return [];
//     }
// }














































































