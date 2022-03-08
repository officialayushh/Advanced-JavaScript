// ------------------Strings ------------------------------------->

// Escape Character
// Finding a string in a String.
// Searching for a String in a string.
// Extracting String Parts.
// Replacing String Element.
// Extracting String Characters
// Other useful methods.


// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor

let myName = "Ayush Sharma";
let myChannelName = 'Ayush Sharma';

// // let ytName = new String("Thapa Technical");  // Use of string Constructor make string.
let ytName = 'Coder Gyan';

console.log(myName);
console.log((ytName));


// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string. 

let myName = "vinod thapa";
console.log(myName.length);



// 👉 Escape Character

let anySentence = "We are the so-called \"Vikings\" from the north."; // \\ => Meaning is escape this word because not giving an error through this,
console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes 

let anySentence =  " We are the so-called 'Vikings' from the north. ";
console.log(anySentence);



// 👉 Finding a String in a String


// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

const myBioData =  'I am the thapa Technical';
console.log(myBioData.indexOf("t", 6));  // Also say that start 6 indexing to represent.


// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...


// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the 
// // last occurrence of searchValue, or -1 if not found.


const myBioData =  'I am the thapa Technical';
console.log(myBioData.lastIndexOf("t", 6));



// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified 
// value and returns the position of the match

const myBioData =  'I am the thapa Technical'; 
let sData = myBioData.search("technical");  // Search option Also find Indexing of an string.
console.log(sData);

// The search() method cannot take a second start position argument.




// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position,
// and the end position (end not included).

var str = "Apple, Bananaa, Kiwi, mango";
// In slice method any particular index will find here,
// let res = str.slice(0,4);
let res = str.slice(7);  // In slice method last index of word is not count,
console.log(res); // Get negative then it will start to find index at last.


// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.


// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.

var str = "Apple, Bananaa, Kiwi";
let res = str.substring(8,-2);  // Same as slice method but dont take negative values.
console.log(res);

// // If we give negative value then the characters are
//  counted from the 0th pos 



// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the 
// length of the extracted part.


var str = "Apple, Bananaa, Kiwi";
// let res = str.substr(7,-2);  // If you give negative values then not anything output it will take.
// let res = str.substr(-4);
console.log(res);




// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value 
// with another value in a string.

let myBioData = `I am ayush coder boss ayush`;

let repalceData = myBioData.replace('ayush','Ayush');
console.log(repalceData); // Only replace one word not element or replace all,
console.log(myBioData);

// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing VINOD (with upper-case) will not work.



//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

let str = "HELLO WORLD";

console.log(str.charAt(9));  // Define Chracter to its position what?


// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.
var str = "HELLO WORLD";

console.log( str.charCodeAt(0) );


// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

var str = "HELLO WORLD";
console.log(str[1]);



//👉  Other useful methods 

let myName = "vinod tHapa";
console.log(myName.toUpperCase()); 
console.log(myName.toLowerCase());


// The concat() Method 🙋‍♂️
// concat() joins two or more strings

let fName = "Ayush"
let lName = "Sharma"

console.log(fName + lName );
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" " ,lName));

// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both 
// sides of a string

var str = "              Hello         World!            ";
console.log(str.trim());  // Soaces also print .


// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

var txt = "a, b,c d,e";   // String
console.log(txt.split(","));           // Split on commas
console.log( txt.split(" "));          // Split on spaces
console.log(txt.split("|"));         // Split on pipe

