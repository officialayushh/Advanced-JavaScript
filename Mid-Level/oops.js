// 👉---------------------------- object oriented Javascript--------------------------->

// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?

// 1st way 

//   let firstData = {    // We Making an Object Here, This All is depend upon key and value.
//       myName : "thapatechnical",
//       myAge : 26,
//       getData : function(){ // Inisde object Calling a function we call him method.
//         console.log(`My name is ${firstData.myName} and my age is ${firstData.myAge}`);
//       }
//   }

//   firstData.getData(); // Calling an object.

// // 2nd way no need to write functions as well after es6

// let bioDatas = { 
//   myName : "thapatechnical",
//   myAge : 26,
//   getData (){  // 2nd method is only for making 2nd type of object.
//     console.log(`My name is ${bioDatas.myName} and my age is ${bioDatas.myAge}`);
//   }
// }

// bioDatas.getData();


// // 👉 What if we want object as a value inside an Object 


// let bioData = { 
//   myName : {
//     realName : "Ayush",
//     channelName : "Ayush Sharma" 
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );




// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  


// For Example 1 
// console.log(this.alert('Awesome'));
// it refers to the current context and that is window global object.


// ex 2 
// function myName() {
//     console.log(this);
// }
// myName();
// For typing this in console then it will be showing window.


// // ex 3 

// var myNames = 'Ayush';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge); // for use of this. we get any property easily..
//     }
// }
// obj.myName();


// Interview Question.

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();  // It will not work because in this method we dont use fat arroe function.

// <-------<>------------<>-----<>-----------<>-------------<>---------->

// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();

// <-------------------<>------------------<>---------------<>------------------->

// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 