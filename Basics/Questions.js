//------------------------------ Naming Practice ----------------------------------->

// Practice:-

// var _myName = "Ayush";
// var 1myName = "Sharma";
// var _1my__Name = "Ayush";
// var $myName = "Ayush Coder";
// var myName% = "Ayush Coder";
// console.log(myName%);

// -----------------------------Data Types----------------------------->

// Practice:-

// ---10 + "20"
// console.log( 10 + "20");
// ---9 - "5"
// console.log( 9 - "5"); //bug
// ---"Java" + "Script"
// console.log( "Java "+ "Script"); // Here We match two strings output is matched but for give spaces between them so we give inside comma.
// ---" " + " "
// console.log( " " + 0);
// ---" " + 0
// ---"vinod" - "thapa" // Showing nan (Not a number)
// ---true + true   //In Js 1 is showing True and 0 is showing False.So here it is showing output is 2.
// ---true + false
// ---false + true
// ---false - true

// ---------------------------Nan------------------>

//Practice:-

// NaN === NaN;  // Nan is globaly so its degfault false,
// Number.NaN === NaN; // Also type is not given any also false,
// isNaN(NaN); // Both this and down side true because nan is not defined anything yet,
// isNaN(Number.NaN);  
// Number.isNaN(NaN);


// console.log(Number.isNaN(NaN));

// -----------------------------------operators=--------------------------------->

//Practice:-

// What will be the output of 3**3? 
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?

// sol 1: ✔
//console.log(9**2); // 9*9 Here we will take positive value, 9 is to power 9.
// console.log(10 ** -1); // 1/10 Negative value, For removing negative value its going upon,


// sol 2:  ✔
// console.log(5 + "Number"); // These Number will be add to 5.concat,

// sol 3: ✔ 

// var a = 5;
// var b = 10;

// output b=5; a=10
// var c = b;
// b=a;
// a=c;

// console.log("The Value Of a is" + a);
// console.log("The Value of b is" + b);

// sol 4: ✔

// var a = 5;
// var b = 10;

// // output b=5; a=10

// a = a + b; // a = 15
// b = a - b; // b = 5; 
// a = a - b; // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// ------------------------------Conditional Statements------------------------------->

//Practice:-

// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.
// var year = 2022

// if(year%400==0){
//     console.log("Leap Year");
// }else if(year%4==0 && year%100!=0){
//     console.log("Leap year");
// }else{
//     console.log("Not a Leap Year");
// }

// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 5){  // Every time else condition for without falsy conditions.
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }

// ------------------------------Loops------------------------------->

// Practice:-

// JavaScript program to print table for given number (8)?

// for(let i=1;i<=10;i++){
//     console.log(i*8);
// }

//-----------------------------------------Functions----------------------------->

// Practice:-


