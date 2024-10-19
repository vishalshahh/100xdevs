// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
// function getLength(str) {
//   console.log("Original String:", str);
//   console.log("Length:", str.length);
// }
// getLength("Hello World");

// indexOf

// function findIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.indexOf(target));
// }
// findIndexOf("Hello World", "World");

// function square(n){
//   return n*n;
// }

// function addSquare(a,b){
//   let val1 = square(a);
//   let val2 = square(b);
//   return val1 + val2;
// }

// console.log(addSquare(2,3));

// // lastIndexOf
// function findLastIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.lastIndexOf(target));
// }
// findLastIndexOf("Hello World World", "World");

// // slice
// function getSlice(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After slice:", str.slice(start, end));
// }
// getSlice("Hello World", 0, 5);

// // substring
// function getSubstring(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After substring:", str.substring(start, end));
// }
// getSubstring("Hello World", 0, 5);

// // replace
// function replaceString(str, target, replacement) {
//   console.log("Original String:", str);
//   console.log("After replace:", str.replace(target, replacement));
// }
// replaceString("Hello World", "World", "JavaScript");

// // split
// function splitString(str, separator) {
//   console.log("Original String:", str);
//   console.log("After split:", str.split(separator));
// }
// splitString("Hello World", " ");

// // trim
// function trimString(str) {
//   console.log("Original String:", str);
//   console.log("After trim:", str.trim());
// }
// trimString(" Hello World ");

// // toUpperCase
// function toUpper(str) {
//   console.log("Original String:", str);
//   console.log("After toUpperCase:", str.toUpperCase());
// }
// toUpper("Hello World");

// // toLowerCase
// function toLower(str) {
//   console.log("Original String:", str);
//   console.log("After toLowerCase:", str.toLowerCase());
// }
// toLower("Hello World");

// const fs = require("fs");

//  my own asynchronous function
// function kiratsReadFile(cb) {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// kiratsReadFile(onDone);


//Promises

const fs = require("fs");

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function (resolve) {
    console.log("Inside Promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("Before Resolve")
      resolve(data);
    });
  });
}

//callback function to call
function onDone(data) {
  console.log(data);
}

kiratsReadFile().then(onDone);
