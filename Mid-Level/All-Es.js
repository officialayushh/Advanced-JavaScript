// ---------------------------Before Array in index file this is created ------------------------------->


// 4️⃣ <Destructuring in  ---------------<>--- ES6 ----<>------------->

// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

//   const myBioData = ['vinod', 'thapa', 26];

//   let myFName = myBioData[0];  // This is a normal method we use before,
//   let myLName = myBioData[1];
//   let myAge = myBioData[2];
  
// let [myFName,myAge, myLName] = myBioData;  // This is a new method to define an array in new form using es-6.
// console.log(myAge);  // In array destructimg position matters a lot at particular position you define.

//   we can add values too 
  
//   let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
//   console.log(myDegree);



  // ➡ Object destructuring 🏁
  // const myBioData = { // simple method to get.
  //   myFname : 'vinod',
  //   myLname : 'thapa',
  //   myAge : 26
  // }

  // let age = myBioData.age;
  // let myFname = myBioData.myFname;

//   Object is used in curley Braces,
  // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData; // using ES-6.
  // console.log(myLname);




// 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

    // let myName = "Ayush";
    // const myBio = {
    //   [myName] : "hello how are you?",
    //   [20 + 6] : "is my age"
    // }

    // console.log(myBio);

    // How to get Dynamic Data in an object ?
    // [] => use square bracket its meaning to that use dynamic.Also add mathematical operators inside Dynamic Data,


  // ➡ no need to write key and value, if both are same 

  // let myName = "vinod thapa";
  // let myAge = 26;

  // const myBio = {myName,myAge}

  // console.log(myBio);




// 7️⃣Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];  //Short form to add any data ...then, Varibale name,

// console.log(MyFavColors);



// <   8  > Rest Operator







// <-----------<>----------- ES7 features -----<>---------<>---------->

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent); // Shows in boolean form,

// 2: **
// console.log(2**3); 





// <-------------<>------- ES8 Features ----<>------------<>------> 

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5)); // create padding in start.
// console.log(message.padEnd(10)); // create  padding in end.


// const person = { name: 'Fred', age: 87 };
// console.log( Object.values(person) );

// const arrObj =  Object.entries(person);  // Give particular array full value,
// console.log(Object.fromEntries(arrObj));

// Async Await more read,





//<----------------<>---------- ES2018 ----------<>-------------->

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);





// <---------------<>------------ ES2019 -----------<>------------->

// Array.prototype.{flat,flatMap}
// Object.fromEntries()   // es8 m last m humne jo kiya h mtlb vapis s convert kardega array me,

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]
//     ];

// Array inside fatch this is woking like that,
// let flatArr = arr.reduce((accum, currVal)  => { 
//           return accum.concat(currVal);
// }) // pura itna bada or complicated method apply kiya tab array mila,

// for 2, we define another level means 2-d or 3-d array.
// console.log(arr.flat(2));  // direct mil jayga array m output iski help se,






// <----------------<>----------- ES2020 ----<>------------------<>----->
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;  // highest integer number.
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n ); // and also we have not perform or add any number here,
// const newNum = 9007199254740991n + 12n;  // for putting an make function is bigINt its type is change.

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string'; // we compare left and right what is truth and what is false,
// console.log(foo);







// <--------------<>-------------- ES2014 -----<>---------<>------------->

// "use strict";

// x = 3.14; 
// console.log(x);



