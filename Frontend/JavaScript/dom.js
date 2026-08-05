// DOM : Document Object Model :

// 1. getElementsByClassName.
// 2. getElementById.
// 3. getElementsByTagName.

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     console.dir(smallImages[i]);
// }

// Query Selctors :

// console.dir(document.querySelector('h1'));        // select the first paragraph..
// console.dir(document.querySelector('#info'));     // select the paragraph using Id..
// console.dir(document.querySelector('.oldImg'));   // select the img using class..

// console.dir(document.querySelectorAll('div img'));   // select all the imgs inside the div using querySelectorAll..
// console.dir(document.querySelectorAll('p'));         // select all the paragraphs using querySelectorAll..

// Manipulation using properties & Methods :
// 1. innerText : it's give the text that show on the page.,
// 2. textContent : gives the actual content we writen in the html file,
// 3. innerHTML : gives a complete markup of the object.

// let para = document.querySelector('p');

// console.dir(para);
// console.dir(para.innerText);
// console.dir(para.textContent);
// console.dir(para.innerHTML);

// para.innerText = "Hi i am a dog";
// para.innerHTML = "Hi i am a <b> Dog </b> ";  // the Dog become bold now.


// let heading = document.querySelector("h3");

// console.dir(heading);
// console.dir(heading.innerText);
// heading.innerHTML = "<u> Meet Jerry </u>"


// Manipulating Attributres : like id, class , style, img ets using getAttribute & setAttribute Methods.
// getAttribute(what to change pass);
// setAttribute(changing attribute, adding new Value etc);

// let img = document.querySelector('img');

// console.log(img);
// console.dir(img);

// console.dir(img.getAttribute('id'));
// console.log(img.setAttribute('id', 'dogImg'));
// console.dir(img.getAttribute('id'));


// Manipulating Style : using style Property like obj.style

// let heading = document.querySelector("h3");

// console.log(heading);
// console.dir(heading);

// heading.style.color = "red";
// heading.style.backgroundColor = "green";


// Manipulating Style : using classList Property like obj.classList

// let heading = document.querySelector("h2");

// console.log(heading);
// console.dir(heading.classList);

// heading.classList.add("heading", "underline");
// heading.classList.remove("heading");
// console.dir(heading.classList);
// console.log(heading.classList.contains("heading"));     // to cehck that object have a class or not ???

// console.log(heading.classList.toggle("heading"));     // use to check that if class exist remove and if class does't exist then add class.


// Navigation : help us to select parentElemnent, children, priviousElementSibling or nextElementSibling of an object.

// let img = document.querySelector('img');

// console.log(img.parentElement);
// console.log(img.children);
// console.log(img.childElementCount);
// console.log(img.priviousElementSibling);
// console.log(img.nextElementSibling);


// Adding New Elements on page : using 1.append(); 2.appendChild(); 3.prepend(); 4.insertAdjacement(where, which one);

// let body = document.querySelector('body');
// let p = document.querySelector('p');

// let para = document.createElement('p');
// let btn = document.createElement('button');

// btn.innerText = "Know more";
// para.innerText = "Hi my name is Muhammad Hilal";
// para.append("   i am a Software Enginerr at UET Mardan");
// btn.append("!");

// body.appendChild(para);     // add element into the last of object
// p.appendChild(btn);
// p.prepend(btn);           // add element into the start of object
// p.insertAdjacentElement('beforebegin', btn);
// p.insertAdjacentElement('afterbegin', btn);
// p.insertAdjacentElement('beforeend', btn);
// p.insertAdjacentElement('afterend', btn);

// console.dir(para);
// console.dir(btn);
// console.log(para);
// console.log(btn);


// Removing Elements from the page : using 1.removeChild(); 2.remove();

// let body = document.querySelector('body');

// let para = document.createElement('p');
// para.innerText = "Hi my name is Muhammad Hilal";
// para.append("   i am a Software Enginerr at UET Mardan");

// body.appendChild(para);

// console.dir(para);
// console.log(para);

// body.removeChild(para);
// body.remove();



// P Question :

// let para1 = document.createElement('p');
// para1.innerText = "Hi i am red !";

// let body0 = document.querySelector('body');
// body0.prepend(para1);

// para1.classList.add("red");

// console.dir(para1);
// console.log(para1);

// let heading3 = document.createElement('h3');
// heading3.innerText = "Hi i am blue !";

// let body1 = document.querySelector('body');
// body1.prepend(heading3);

// heading3.classList.add("blue");

// console.dir(heading3);
// console.log(heading3);


// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');

// h1.innerText = "Hey i am in Div";
// para2.innerText = "Me Too";

// let body2 = document.querySelector('body');

// body2.prepend(div);
// div.prepend(h1, para2);

// div.classList.add("dive");

// console.dir(div);
// console.log(div);



// DOM Events in JS : events are the singles that means something occure on the page.

// 1. Inline Events: use with HTML tags.
// 1. onclick event, 2.onmouseenter event.

// for single button onclick event.

// let btn = document.querySelector('button');

// console.log(btn);
// console.dir(btn);

// btn.onclick = function() {
//     console.log("Button was clicked ");
//     alert("Button was clicked ");
// }

// function sayHello() {
//     console.log("Hi hello everyone!");
//     alert("Hi hello everyone!");
// }
// btn.onclick = sayHello;

// for multiple buttons oncloick event :

// let btns = document.querySelectorAll('button');

// function sayHello() {
//     console.log("hello everyone");
//     alert("hello everyone");
// }

// function onMouse() {
//     console.log("hello everyone");
//     alert("hello everyone");
// }

// for(b of btns) {
//     b.onclick = sayHello;
//     b.onmouseenter = onMouse;
//     console.dir(b);
// }


// Event Listener in JS:

// let btns = document.querySelectorAll('button');

// function sayHello() {
//     console.log("hello everyone");
//     alert("hello everyone");
// }

// function sayName() {
//     console.log("Muhammad Hilal");
//     alert("Muhammad Hilal");
// }
// function onMouse() {
//     console.log("hello everyone");
//     alert("hello everyone");
// }

// for(b of btns) {
//     b.addEventListener("click", sayHello);
//     b.addEventListener("click", sayName);
// }



// code for generating random colors :

// let btn = document.querySelector('button');

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector('h3');
//     let randomcolor = getRandomColor();
//     h3.innerText = randomcolor;

//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomcolor;
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = (`rgb(${red}, ${green}, ${blue})`);
//     return color;
// }


// let para = document.querySelector('p');

// para.addEventListener("click", function() {
//     console.log("paragraph was clicked");
// });

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function() {
//     console.log("Div was Click");
//     box.innerHTML = "Hey it's me Div !";
//     box.classList.add("box1");
// });


// This keyword with Event Listeners :

// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h2 = document.querySelector('h2');

// function changeColor() {
//     console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "aqua";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);

// btn.addEventListener("click", function() {
//     console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "aqua";
// })


// Keyboard Events in JS :

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log("key was pressed");
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
// });

// inp.addEventListener("keyup", function() {
//     console.log("key was released");
// });



// Forms Events in JS :

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("form was submited");
// });


// Extracting Data form the Forms :

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
// });


// another method for accessing form elemenmts :

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log(form);
//     console.dir(form);

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
// });


// Change & input Events in JS :

// let form = document.querySelector("form");
// let user = document.querySelector("#user");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
// });

// user.addEventListener("change", function(event) {
//     console.log("change event");
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input", function(event) {
//     console.log("input event");
//     console.log("final value = ", this.value);
// });


// My Text Editor using JS :

// let inp = document.querySelector("input");
// let para = document.querySelector("p");

// inp.addEventListener("input", function() {
//     console.log(inp.value);
//     para.innerText = inp.value;
// });


// Event Bubbling :

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");


// div.addEventListener("click", function() {
//     console.log("Div was clicked");
// });

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();                          // to stop event bubbling we use this event function 
//     console.log("Ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("Li was clicked");
//     });
// }


// Todo App :

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");


// btn.addEventListener("click", function() {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "Delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item); 
//     inp.value = "";
// });

// ul.addEventListener("click", function(event) {
//     if(event.target.nodeName == "BUTTON") {
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("Task Deleted");
//     }
// });

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }































































