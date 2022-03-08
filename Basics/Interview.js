// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// var vs let vs const 

// var
// It can be updated and re-declared into the scope.

// let
// It can be updated but cannot be re-declared into the scope.

// const
// It cannot be declared without initialization.



// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// Difference between null vs undefined? 

var iAmUseless = null;  // Given Any Value Null
console.log(iAmUseless);
console.log(typeof(iAmUseless));//Bug

var iAmStandBy;  // Not given any value is undefined
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));



// 🙋‍👨‍🏫 Interview Question 3 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 

//Ex : -  For calculate two strings its output will be nan(Not a Number);
var myPhoneNumber = 9876543210;
var myName = "Ayush";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName)); // Showing nan because its string.



// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?

// sol 
var num1 = 5;
var num2 = '5';

console.log(typeof(num1));
console.log(typeof(num2));

console.log(num1 == num2 );  //Check Only Value,

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

console.log(num1 === num2 ); // Also check datatype and also value,



// 🙋‍👨‍🏫 Interview Question 5 🙋‍👨‍🏫
// DIfference Between break and continue ?

// 🤗break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// 🤗continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.



// 🙋‍👨‍🏫 Interview Question 6 🙋‍👨‍🏫
// DIfference Between While Loop and Do While Loop ?

//  While Loop Statement
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 


// If num value is true then its enter otherwise not enter in block
var num=20;
// block scope 
while(num <= 10){
  console.log(num); //infinte loop
  num++; // Increment,
}

//  Do-While Loop Statement
// If condition is wrong then also do 1 time after all its false but one time run.output is showing one time any case,
var num = 20;
do{
  console.log(num); //infinte loop
  num++;
}while(num <= 10);



// 🙋‍👨‍🏫 Interview Question 7🙋‍👨‍🏫 

// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

  // OR

  // A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// DRY => do not repeat yourself



