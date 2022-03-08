// ----------------------------Arrays in JavaScript----------------------------->

// Always start Indexing in an array is 0.
// arr.length-1 is the last index number, & arr.length it will be start with 0 indexing.
// Square Brackets You Will see It means it has been an array;

// Transversal of an Array
// Searching and filter in an Array
// How to sort and compare an Array
// How to Insert,Add, Replace and Delete Elements in Array(CRUD);
// Map(),Reduce(),Filter();

// Example:-
var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];


// 1️⃣ Array Subsection 1 👉 Traversal in array✌ 
// navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 


var myFriends = ['Ayush','ramesh','arjun','vishal'];

console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array 

console.log(myFriends.length);

// we use for loop to navigate 

var myFriends = ['Ayush','ramesh','arjun','vishal'];
for(var i=0; i<myFriends.length; i++){
  console.log(myFriends[i]);
}
// for in and for of also here you find that in interview.
// Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

var myFriends = ['Ayush','ramesh','arjun','vishal'];
//Element is giving element Here,
// index is given indexing(length) here,
// array is given here full array,
// You Not use here break;
// This function also here but not use this on fat arrow function.
myFriends.forEach(function(element, index, array) {
      console.log(element + " index : " +
        index + " " + array);
});
// Fat arrow use here:-
myFriends.forEach((element, index, array) => {
  console.log(element + " index : " +
    index + " " + array);
});



// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

console.log(myFriendNames.indexOf("Thapa", 3));



// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

console.log(myFriendNames.lastIndexOf("Thapa",3));


// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value, 
// returning true or false as appropriate.

var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

console.log(myFriendNames.includes("thapa")); // Hai ya nahi,


// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

const price = [200,300,350,400,450,500,600];

// This is shortcut method to solved otherwise we solved to take return also;
// price < 400
// Find method is only gives one element of all sector,

// Also do this type,
const findElem = prices.find((currVal) =>  currVal < 400 );
console.log(findElem);

// OR
// Gives particular element.
console.log(  prices.find((currVal) => currVal > 1400 )  );


// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.
// Gives particular indexing of an element.
console.log(  prices.findIndex((currVal) => currVal > 1400 )  );


// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

const prices = [200,300,350,400,450,500,600];

// price < 400
const newPriceTag = prices.filter((elem, index) => {
  return elem > 1400;
})
console.log(newPriceTag);


// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// Probably its work in string,
const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

console.log(months.sort());

const array = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());


// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.




// 4️⃣ Array Subsection 4 👉 Perform CRUD

// Array.prototype.push() 🙋‍♂️
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

const animal = ['pigs', 'goats', 'sheep'];
// push Function Add data in last (End;)
const coun = animals.push('chicken');
console.log(count);  // Add krdega ek element extra array m,

// animals.push('chicken', 'cats','cow');
// console.log(animals);


// unshift is use to add data in starting,
// Array.prototype.unshift() 🙋‍♂️
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.


const animals = ['pigs', 'goats', 'sheep'];

const count = animals.unshift('chicken');
console.log(count);
console.log(animals);

animals.unshift('chicken', 'cats','cow');
console.log(animals);


// 2nd example 

const myNumbers = [1,2,3,5];

myNumbers.unshift(4,6);
console.log(myNumbers);



// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// pop methods removes ending element.
const plant = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
console.log(plants.pop());
console.log(plants);


// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// shift methods removes starting element.
const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.shift());
console.log(plants);

//  Very Important To that,
// 5️⃣ Array Subsection 4 👉 Map and Reduce Method 

// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 

// map functon makes new array always dont be edit this our previous array.
const array1 = [1, 4, 9, 16, 25];  // Map and forEach Both are same no big difference between them,it's been return new array but forEach loop define undefined.
// num > 9
let newAr = array1.map((curElem,index,arr) => {
    return curElem > 9;
})
console.log(array1);
console.log(newArr);  // Give form of boolean of this solution.

let newArr = array1.map((curElm, index, arr) => {
    return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
}).reduce().  // Other method also use this is chainable method.
console.log(newArr);

// ForEach Also work at same,
// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);

// It return new array without mutating the orignal array 



// 👉 Reduce Method 

// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array 

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

let arr = [5,6,2];

let sum = arr.reduce((accumulator, curElem) => {
  // Debugger is shows in console how our program will work;
        debugger; // Go to Console and then paste there and on debugger mode here;
      return accumulator += curElem; //Accumulator complete our all works so only need to=> accumulator add element only.
},7) // Initial Value 7 means one input is remaining to do then we use that to solve.
console.log(sum);

