// String is a complex datatype 
// It can store multiple characters together.
// It uses collection of characters
// Lets Start
// First String
var str="Hello World";
// Second String
var str2="xyz"
console.log("Printing the string: "+str);
// Length of the string
console.log("Finding the length of the string: "+str.length);
// Concatenating two strings
console.log("Concatenation of two Strings: "+str+str2);
// Accessing individual character using index
console.log("Accessing individual elemnts through index through 0: "+str[0]);
// Output H
// Indexing starts from 0 in JavaScript
// Negative indexing also works but it gives last element
// -1 will give 'd'
console.log("Finding the negative index works but gives last element: "+str[-1]);
// Accessing 2nd elemnt of the string
console.log(str[1]);
// Accessing elements out of range throws error
// Accessing the substring of the string
console.log(str.substring(6));
// Output : World
// Pass start and end to get sub string between those indexes
console.log(str.substring(5,9));
var res=str.substring(2,5);
console.log(res);
// Output : lo
// To check whether a particular value exists or not we use method indexOf()
var res1=str.indexOf("o")
console.log(res1)
// If we want to chceck index from right to left 
var res2 = "World".lastIndexOf("o");
console.log(res2);
var res3=str.lastIndexOf("World")
console.log(res3)
// Method split() splits the string based on delimiter provided
var arr = str.split(" ");
console.log(arr);
/*
Output :
["H", "e", "l", "l", "o", "W", "o
r", "l", "d"]
*/
// Functions and arrays
// typeof
// =
// var x = '10';
// x = true;
// var y;

// var a = 10;
// var b = 20;
// var c = a + b;

// var res = a < 10 && a >= 10;

// console.log(typeof res);

// conversion
// var x = 'abc';

// var intX = parseFloat(x);

// console.log(intX, x);
var x = 10;
var str = x.toString();
// console.log(typeof str);

// truthy & falsy: 0, "", NaN, undefined, null, false
// var x = []; 
var str = 0;
var res = !!str;

console.log(res);
// Bitwise
// string
// truthy & falsy
// conversions
// function