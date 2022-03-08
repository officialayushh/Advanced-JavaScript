// -----------------------------DOM, BOM, WINDOW OBJECT -------------------------------------->

// Window vs Document;
// DOM vs BOM;
// DOM Navigation;
// Searching and getting Elements Reference;


// 1️⃣ Window is the main container or we can say the 
// global Object and any operations related to entire 
// browser window can be a part of window object. 

// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object


// 2️⃣ All the members like objects, methods or properties. 
// If they are the part of window object then we do not refer 
// the window object. Since window is the global object 
// so you do not have to write down window. 
// - it will be figured out by the runtime.

// For example
// 👉 window.screen or just screen is a small information 
// object about physical screen dimensions.
// 👉 window.location giving the current URL
// 👉 window.document or just document is the main object 
// of the potentially visible (or better yet: rendered) 
// document object model/DOM.
  

// 2️⃣ Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()


// 3️⃣ Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// Now, I know you have a doubt like we have seen the methods 
// and object of the global object that is window. But What about
// the properties of the Window Object 🤔

// so example of window object properties are
// innerHeight, 
// innerWidth and there are many more 

// let's see some practical in DOM HTML file



// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 


// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.


// Go to console and paste this on your console then site is asking to continue.Then Change its location to open.
alert(location.href); // shows current URL
if (confirm("Want to Visit ThapaTechnical?")) {
  location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
}




// Section 3️⃣: Navigate through the DOM 

// Root Element Of Document ?
// ḍocument.documentElement (Html).
// Node bolte h usse jo html k andar element h body or head or uski body k andar jo hai a and p all that is node.


// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// ----------------------------------Questions And Preparation For Interview---------------------------------->

// 👉 Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// 👉 Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild 
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";  // Any query you can select here to help of class.

// 👉 How to find the Parent Nodes 
// document.body.parentNode  // Find parent of our child.
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSiblingf
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling

// To Perform Any Action With Html We Are Using DOM.

//SECTION 4️⃣:  How to search the Elements and the References 
// We will see the new file 