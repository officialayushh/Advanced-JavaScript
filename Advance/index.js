// <-------------------------------- Advance JavaScript ------------------------------------->

// Event Propagation (Event Bubbling and Event Capturing)
// Higher Order Function
// Callback Function
// Function Currying (we will see after Async JS section)
// CallBack Hell
// AJAX call using XML Httprequest
// BONUS Section Json
// Fetch Api
// Pormises
// Async-Await
// Error Handling in JS






// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// const parentId = document.getElementById('parentId');
// const childId = document.getElementById('childId');


// Overflow Structure => Top to Botton OR Bottom to Top .
// const parentCall = () =>{
//     alert('parent div call');
// }

// const childCall = () =>{
//     alert('child Div call')
//     event.stopPropagation(); // stop kardega outer mose ko.
// }

// 3rd thing is passed to propogate an event means reverse this event.Mostly 2 arguments are available in eventlistener but 3 also Here.
// parentId.addEventListener('click', parentCall, true);
// childId.addEventListener('click', childCall, true); // By default this is false.







// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 






// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 


// // // we need to create a calculator 

const add = (a,b) => {
    return a+b;
}
// // console.log(add(5,2));

const subs = (a,b) => {
    return Math.abs(a-b);
}
const mult = (a,b) => {
    return a*b;
}

const calculator = (num1,num2, operator) => {
  return operator(num1,num2);
}

calculator(5,2,subs) // here calculator is higher order function

console.log(calculator(5,2,subs)); // mul,sub,add both all are callback function because we pass all this inside function as an argument,

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 




// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 



// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?
// Already Solved Above Side.







//<----------<>-------------- Function Currying ---------<>------<>----------------->

// Currying is a technique of evaluating function with multiple arguments, into 
// sequence of funtion with single argument.

// When a function, instead of taking all arguments at one time,
// takes the first one and return a new function that takes the second
// one and returns a new function which takes the third one,and so forth,
// until all arguments have been fulfilled.

// Ex:-
// function sum(num1){
//     // console.log(num1);
//     return function(num2) {
//         // console.log(num1,num2);
//     return function(num3) {
//         console.log(num1+num2+num3);
//     }
//     }
// }

// Interview Questions:-
// OutPut of sum (5) (3) (8) ?

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); // solving one line of code through sort method solved.

// sum(5)(3)(8);







// //<----------<>---------- 8️⃣: CallBack Hell ------<>-------------------->

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)