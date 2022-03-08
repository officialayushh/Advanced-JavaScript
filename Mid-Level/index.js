// EcmaScript

// 👻 Now It's Time for Modern JavaScript 😍😍 

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

// 1️⃣ LET VS CONST  vs  VAR
// var => Function scope 
// let and const => Block Scope 

// Ex:-
function biodata() {
  var myFirstName = "Ayush";
  console.log(myFirstName);

  if(true){
    const myLastName = "Sharma";
  }

  console.log('innerOuter ' + myLastName);
}

console.log(myFirstName);

biodata();


// 2️⃣ Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
//           8 * 2 = 16(8*2)
//          => 8 * 10 = 80

for(let num = 1; num<= 10; num++){
    let tableOf = 12;  
  // Ex only:- console.log(tableOf + " * " + num + " = " + tableOf * num);
  console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );
}


// 3️⃣ Default Parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

function mult(a,b=5){
  return a*b;
}

console.log(mult(3)); 

// 4️⃣ Fat Arror Function 

// 👻 Normal Way of writing Function  
// Whenever you call its run correctly.
console.log(sum()); 

function sum() {
  let a = 5; b = 6;
  let sum = a+b;
 return `the sum of the two number is ${sum}`;
}

// 👻 How to convert in into Fat Arrow Function.
// Call after initialisitaion the arrow otherwise its showing an error;
const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

console.log(sum()); 



// --------------------------------Date & Time ------------------------------->

// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.




// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section 
// new Date(date string)

// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

let currDate = new Date(); 
console.log(currDate);

console.log(new Date());
// Proper  date and time print.
console.log(new Date().toLocaleString()); // 9/11/2019, 1:25:01 PM
// Date and day and time will be print properly.
console.log(new Date().toString()); // Wed Sep 11 2019 13:25:01 GMT+0700 (GMT+07:00)

// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time—the number 
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

console.log(Date.now());

// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

var d = new Date(2021,0);
console.log(d.toLocaleString());



// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string

var d = new Date("October 13, 2021 11:13:00");
console.log(d.toLocaleString()); //Without give proper string it showing not sxact time;

// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:

var d = new Date(0);
var d = new Date(1609574531435);
var d = new Date(86400000*2);
console.log(d.toLocaleString());




//👉 Dates Method

const curDate = new Date();

// // how to get the indivisual date 
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth()); // 0-11 jan to dec
console.log(curDate.getDate());
console.log(curDate.getDay());

// // how to set the indivisual date 

console.log(curDate.setFullYear(2022));
// The setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 10, 5));
let setmonth = curDate.setMonth(10); // 0-11 jan to dec
console.log(setmonth);
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());




//👉 Time Methods

const curTime = new Date();

// how to get the indivisual Time 

console.log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds 
// since January 1, 1970
console.log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a 
// // number (0-23)
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

// // how to set the indivisual Time 

// let curTime = new Date();

// console.log(curTime.setTime());
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(5));





// --------------------------- Math Objects ----------------------------->

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 🙋‍♂️
console.log(Math.PI);  // Property of math to finding pi,

// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer

let num = 10.501;
console.log(Math.round(num));


// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

console.log(Math.pow(2,3)); // same pow is working like that.
console.log(2**3);   //Mean is that 2 ka cube 3.


// Math.sqrt() 🙋‍♂️
// Math.sqrt(x) returns the square root of x

console.log(Math.sqrt(25));  // Find square root of 25 output is 5.
console.log(Math.sqrt(81));
console.log(Math.sqrt(66));


// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));
console.log(Math.abs(4-6));


// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.51));
console.log(Math.round(4.51));
console.log(Math.ceil(99.01));
console.log(Math.round(99.1));  // In every condition its increment 100%.


// Math.floor()  🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer

console.log(Math.floor(4.7)); 
console.log(Math.floor(99.1)); //In every condition its as a same to that.


// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments

console.log(Math.min(0, 150, 30, 20, -8, -200));


// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments

console.log(Math.max(0, 150, 30, 20, -8, -200));



// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// Any random number give(0-1) if we apply only random, and we multiply to 10 then give 1 to 10 any random and if we apply floor then give as same number we type here.
console.log(Math.floor(Math.random()*10)); 
console.log(Math.floor(Math.random()*10)); // 0 to 9


// Math.trunc()  🙋‍♂️
// The trunc() method returns the integer part of a number

console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1)); // Print as itn is value dont affect any sign to this.
