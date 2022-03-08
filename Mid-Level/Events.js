b// ---------------------------Events------------------------------------>

// 4 Ways of writing Events in JavaScript
// What is Event Object ?
// MouseEvent in Javascript
// KeyboardEvent in Javascript
// InputEvents in JavaScript


// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, 
// to be added to HTML elements.


// All Examples are appied in html file to particular button and element.


// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// Ex;-  onClick="alert('I m awesome');"

// 2: By Calling a funcion (We already seen and most common way of writing) 
// Ex:-  particular function give in your button and call in js.

// 3: using Inline events (HTML onclick="" property and element.onclick)
// First For an button particular id give is compulsory.
// Ex:-  const thirdWay = document.getElementById('thirdWay');
    //  thirdWay.onclick = function() {
        // alert('Anything');
    // }
// Anonymous Function => JIska Koi Naam Hi Na Ho,

// 4: using Event Listeners (addEventListener and IE's attachEvent)
// Ex:-  const fourway = document.querySelector('#fourWay');
// fourWay.addEventListener('click', () => {  // Here We use Callback Function.
    // alert('Hii Guys,');
// })


// Difference Between Event Listener and Function Event.
// Event Listener => You call mutiple times of different types of work doing as you need to that.
// Function => Various Are There Break Points Here dont call mutiple times or doing work and also call only one time. OverRight Kardeta Hai cheezo ko,

// CallBack Function => Ek function Ke andar Kisi Function Ko agar Hum As a Argument Pass kar Rahe Hai Then That is Callback Function.

// check the Events HTML File




// section 2️⃣: What is Event Object?
// Event object is the parent object of the event object. 
// for Example:-
// MouseEvent, focusEvent, KeyboardEvent etc 

// Types of Event 

// Example:-
// const fourtWay = document.getElementById('fourtWay');

// const checkEvent = () =>{
    // alert('we see event object');  // Alert first showing to pass an event.
    // console.log(event); // After passing an event console in shown.
    // console.log(event.target);  // target also showing that,konse target element k through particular kiya hai,
    // console.log(event.type);  // Showing type.
// }

// fourtWay.addEventListener('click', checkEvent);



// section ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.
// Example:-

// Events used to call this is onclick that type of events.
// for calling a function :- onmousedown,onmouseup function is calling inside html to work here,

// Also make html p tag in this make id and call particular function down and up,
// function mouseDown() {
    // document.getElementById("my").style.color = "red";
// }

// function mouseUp() {
    // document.getElementById("my").style.color = 'blue';
// }

// const mEnter = dosument.getElementById('box');

// mEnter.addEventListener('mouseenter', () =>{
    // mEnter.style.backgroundColor = 'red';
    // console.log('Mouse Enter');
// })

// mEnter.addEventListener('mouseleave', () =>{
    // mEnter.style.backgroundColor = 'green';
    // console.log('Mouse leve');
// })



// section ️4️⃣ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.
// Reference:- https://www.w3schools.com/jsref/obj_keyboardevent.asp

// p karke ek element banayenge input dalne k bad tabhi type m aayega vo,

// Ex:- 
// input type lkar hi solve hoga ye because of key board,
// Particular id lekar define kiya hai,
// const keyPress = () => {
    // document.getElementById('keys').innerHTML = `you press ${event.key} and it's code is ${event.code}`;  //for use of event function you can get various things.
// }

// Better to use 2nd and 3rd once

// const keyUp= () => {
    // document.getElementById('keys').innerHTML = 'key is up';  //for use of event function you can get various things.
// }

// const keyDown= () => {
    // document.getElementById('keys').innerHTML = 'key is down';  //for use of event function you can get various things.
// }


// Events used here:- onKeypress,onKeydown,onKeyup;




// Section 5️⃣ InputEvents in JavaScript 
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.

// In Select id function we use onChange function.

// const selectElement = () =>{
    // const inputChange = document.getElementById('name').value;
    // const iceCreams = document.getElementById('select').value;

    // const result = document.getElementById('result');
    // result.innerHTML = `${inputChange} select ${select} ice-cream flavour`;
// }

// OR----

// const iceCreams = document.getElementById('select');
// select.addEventListener('change', () => {
    // const inputChange = document.getElementById('name').value;
    // const iceCreams = document.getElementById('select').value;
    // const result = document.getElementById('result');

    // result.innerHTML = `${inputChange} select ${select} ice-cream flavour`;
// });  // for event listen we dont use to add any onchange or inline function here at html.

// For doing this give name is also compulsory.


// Onclick has been overWrite but eventListener not be overWrite.

// Conclusions:-
// This is beacuse addEventListener does not overwrite existing event handlers,
// Whereas onclick overrides any existing onclick = fn event handlers.

// The other significant difference, of course, is that onclick will always work,
// whereas addEventListener does not work in iNternet Explorer before version 9.





// --------------------------------------------- Timing Bases Events---------------------------------->

// setTimeout();
// setInterval();
// clearTimeout();
// clearInterval();


// 👉 ---------------------------------------------  JavaScript Timing Events  ----------------------------------------------->



// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.


// 1️⃣ setTimeout()
// Ex:-

// const myName = document.querySelector('#showMyName');
// const btn = document.querySelector('#btn');

// const showMyName = () =>{
    // myName.innerHTML = "Loading..."
    // setTimeout(()=>{
        // myName.innerHTML = "Ayush Sharma"
    // }, 1000);
// }

// btn.addEventListener('click', showMyName);  // Button p click karane par event listen kara diya, konsa showname id wala,

// For this in Html:-
// first we making p tag an inside us make one more p tag and
// give him id and then make button and also give his name.



// 2️⃣clearTimeout()
// Ex:-
// button onclick = "myVar = setTimeout(myFunction, 2000)">Try it</button>
// button onclick = "clearTimeout(myVar)">Stop it</button> //Run Nahi hone dega time ko .

// Js m myFunction m alert laga denge.




// 3️⃣ setInterval()


// 4️⃣ clearInterval()
// Ex:-
// Ex:-
// const stopNum = document.querySelector('p');
// const btn = document.querySelector('#btn');
// let num = 0;
// let timeref;  //use to stop;
// const showMyNum = () =>{
    // stopNum.innerHTML = "Loading...😒"
    // timeref = setInterval(()=>{  //timeref is put to only stop condition want.
        // stopNum.innerHTML = `${num}`;
        // num++;
    // }, 1000);
// }

// btn.addEventListener('click', showMyNum); 

// stopInterval.addEventListener('click', () => {
//     clearInterval(timeref);
// });


