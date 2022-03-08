// // 🏁🏁Asynchronous JavaScript
// Hoisting in JavaScript
// Scope Chain
// Lexical Scoping in JavaScript
// Use Strict Mode
// This KeyWord
// Closures in jAvaScript
// What is Asynchronous javascript programming?
// What is Event Loop?



// // 1️⃣ Hoisting in JavaScript 
// InterView Question:-

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)











// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c); //I can't use C 
// }

// first();










// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you.
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// Closures is making after this that will showing in console.

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5); // check after return closure is come or not.
// dir is give detail more about that,
// console.dir(checkClousure); // normal as a print karayenge to outside function or inside function dedega,or function banakar call karenge to show ho jayga. 

// "use strict"

// let x = "Ayush"; // Data type os requirement to this.
// console.log(x);






// //👻 What is Event Loop in JavaScript?

// 😉😉 Execution Stack
// Execution first all things.
// Then, After that it will be going to hold to gone another sides.

// 🎉🎉 Web APi's 
// settimeout()
// DOM
// AJAX/API CALLS

// 😍😍 Message queue
// After Web api's its come to message queue and its running a loop or refresh then again,
// its going to execution stack.






// InterView Question:-
// Difference between Synchronous and Asnchronous JavaScript ?

// // 6️⃣:   Synchronous JavaScript Prog 
// Do kam ek sath kar rahe hein, Jabtak pehla kam khatam nahi ho jata dusra nahi kar skate,
// Ex:-
// 1work = 10min
// 2work = 5s

// let see => In fun1 first outside run fun1 then its run and 
// print 1st console then fun is called then fun2 is run and then 
// 3rd console is run.

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`); // Work is doing by one by one,
// }

// fun1();


// Asynchronous JavaScript Prog 
//  Sare kam one by one chalte hi rahenge kuch bhi rukega nahi,
// let see => same above code, 1st console print and then called fun 2
// but seeing 2s remaining to call so not waiting and continue....

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();