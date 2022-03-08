// Errors Showing and according to its character are allowed or not naming practice how it will be form or not,


// --------------------------------Data Types ------------------------------------->

// undefined
// Boolean
// Number
// String
// BigInt
// Symbol

var myName = "Ayush";
console.log(typeof(myName)); // Find particular type,


// ------------------------------ Expression and operators -------------->
// Assignment Operators
// Arithmetic Opeators
// Comparison Operators
// Logical Operators
// String Operators
// Conditional (ternary) operator

// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

var x = 5;
var y = 5;

console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
console.log(`Is both the x and y are equal : ${x == y}`);


// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);

console.log("Remainder Operator " + 27%4);


// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

var num = 15;
var newNum = num-- + 5;
console.log(num);  // Here Output Will Be 16 after sign (+), Because 1 increase increment.
console.log(newNum); // Here Output will be 20, Not increased any value as same print in postfix.


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = ++num + 5; 
console.log(num); // Here output will be 16 after sign (+), Because 1 increase increment.
console.log(newNum); // Here output will be 21, Increased value because adding sign in starting so it will be add, print in prefix.


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.


// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.
var a = 30;
var b = 10;

// Equal (==)
console.log(a == b);

// Not equal (!=)
console.log(a != b);

// // Greater than (>)
console.log(a > b);

// // Greater than or equal (>=)
console.log(a >= b);

// // Less than (<)
console.log(a < b);

// // Less than or equal (<=)
console.log(a <= b);


// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

var a = 30;
var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

console.log(!((a>0) || (b<0)));
console.log(!true);


// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


console.log("Hello World");

console.log("hello " +  "world");

var myName = "Ayush";

console.log(myName + " Ayush");
console.log(myName + " Sharma");
console.log(myName + " Ayush Sharma");


// ------------------------------Control Structures & Loops------------------------------------>
// If..Else
// Switch Statement
// While Loop
// Do-While Loop
// For Loop
// For in Loop
// For of Loop
// Conditional(Ternary operator)


//  1️⃣If...Else
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.

var tomr = 'sunny';

if(tomr == 'rain'){
  console.log('take a raincoat');
}else{
  console.log('No need to take a raincoat');
}


// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands

// Solved through if-else condition.
var age = 17;
if(age >= 18){
  console.log("you are eligible to vote");
}else{
  console.log("you are not eligible to vote");
}

// Solved by Ternary Operator.
var age = 18;
console.log((age >= 18) ? "you can vote" : "you can't vote"); // ? mean agar y h to vote de sakte h : nahi h toh nahi,


// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

var area = "rectangle" ;
var PI = 3.142, l=5, b=4, r=3;

// If-else Condition use here:-
if(area == "circle"){
  console.log("the area of the circle is : " + PI*r**2);  // Apply formulla here pirsquare.
}else if(area == "triangle"){
  console.log("the area of the triangle is : " + (l*b)/2); 
}else if(area == "rectangle"){
  console.log("the area of the rectangle is : " + (l*b));
}else{
  console.log("please enter valid data");
}

//Switch case Start Here:-
var area = "dsfsad" ;
var PI = 3.142, l=5, b=4, r=3;

switch(area){
  case 'circle': 
    console.log("the area of the circle is : " + PI*r**2);
    break;

  case 'triangle':
    console.log("the area of the triangle is : " + (l*b)/2);
    break;

  case 'rectangle':
    console.log("the area of the rectangle is : " + (l*b));
    break;

  default:
    console.log("please enter valid data");
} 

// While and do while discuss in interview Part,

// 6️⃣ For Loop 

for(var num = 0; num <= 10; num++){
    debugger; // see to debug,
    console.log(num);
} 


// --------------------------------------Functions------------------------------------>
// A JavaScript function is a block of code designed to perform a particular task.

// Function Defination
// Calling a Function
// Function Parameter
// Function Arguments
// Function Expressions
// Return keyword
// Anonymous Function

//  1️⃣Function Definition 

// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

function sum(){ // Defining a Function
  var a = 10, b = 40;
  var total = a+b;
  console.log(total);
}
sum(); // Calling a function


// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


function sum(a,b){ // Here a,b is the parameters.
  var total = a+b;
  console.log(total);
}

sum();
sum(20,30); // 20 and 30 is argument.
sum(50,50);
sum(5,6);


// 4️⃣ Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

function sum(a,b){
  var total = a+b;
  console.log(total);
}

var funExp = sum(5,15); // Function expression is like that express function before,and dont need to define the, call directly.
funExp; // Also Do this,


// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"


function sum(a,b){
  return total = a+b;
}

var funExp = sum(5,25);

console.log('the sum of two no is ' + funExp );


// 6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.


var funExp = function(a,b){ // Only this code will be anonymous function.
  return total = a+b;
}

var sum = funExp(15,15);
var sum1 = funExp(20,15);

console.log(sum > sum1 );
