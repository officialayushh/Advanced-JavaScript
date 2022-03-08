// ----------------------Arrays --------------------------------->

// Practice:-

// Array.prototype.splice() 🙋‍♂️
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?


// sol1: 
const newMonth = months.splice(months.length,0,"Dec");
console.log(months);

// sol2:
// Passing an empty array, Not deleting anything so if we can delete anything then its showing accurately,
console.log(newMonth);

// sol3: 
const months = ['Jan', 'march', 'April', 'June', 'July'];

// indexOf take index of any element
const indexOfMonth = months.indexOf('June'); 
// Formatting=> splice(index,delete index of element,element);
if(indexOfMonth != -1){
  const updateMonth = months.splice(indexOfMonth,1,'june');
  console.log(months);
}else{
  console.log('No such data found');
}


// sol4: 
const months = ['Jan', 'march', 'April', 'June', 'July'];

const indexOfMonth = months.indexOf('April');

if(indexOfMonth != -1){
  const updateMonth = months.splice(indexOfMonth,2);
  console.log(months);
  console.log(updateMonth); //Deleting element will update here;
}else{
  console.log('No such data found');
}

// Practice:-
//  All will be solved only q method that method is splice.
//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those 
//     elements which are greater than 10?

// sol1: 
let arr = [25, 36, 49, 64, 81];
// Use Math.sqrt function using map function to take full array inside us to take output as sqrt.
let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) )
console.log(arrSqr);

// sol 2: 
 let arr = [2, 3, 4, 6, 8]; 
// All use here map,filter and reduce.
 let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
      return accumulator += curElem;
    });
 console.log(arr2);

//  OR......
// Any of code you can remove curley Braces.Not need of requirement to after all,
let arr3 = arr.map((element) => {
    return element * 2;
 }).filter((element)=>{
     return element > 10;
 })
 console.log(arr3);

// we can use the chaining too 

// Practice:-

// How to fatten an array 
// converting 2d and 3d array into one dimensional array 

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', 'zone_8']]
//     ];

// let flatArr = arr.reduce((accum, currVal)  => { 
//           return accum.concat(currVal);
// })

// console.log(flatArr);




// -------------------------Strings---------------------->

// Practice:-

// Display only 280 characters of a string like the 
// one used in Twitter?

let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

let myActualTweet = myTweets.slice(0,280);
console.log(myActualTweet);
console.log(myActualTweet.length);

// Practice:-

let str = "HELLO WORLD";
let lastChar = str.length - 1; // String nnumber humesha ek kam hota h isliy se y nan dega so humne -1 use kiya hai,
console.log(str.charCodeAt(lastChar));




// -----------------------------------------Date & Time--------------------------------------->

// Practice:-

new Date().toLocaleTimeString(); // 11:18:48 AM
//---
new Date().toLocaleDateString(); // 11/16/2015
//---
new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM


// Practice:-

// Challenge Time NOT yet decided
(function(){
  setInterval(()=> {
    console.log(new Date().toLocaleTimeString());
  }, 1000)
})();




// --------------------------- Math Objects ----------------------------->

// Pracice:-

// if the argument is a positive number, Math.trunc() is equivalent to 
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().