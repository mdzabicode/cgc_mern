// bitwise and Strings
//What is string//
// String is a complex Datatype
// It uses collection of characters
var str="abc"
console.log(str)
console.log(str.length) // Length of String
console.log(typeof str)  // Type of Variable (String)
var str2="xyz"
console.log(str+str2); // Concatention of String
console.log("Hello".toUpperCase());  // Convert to Uppercase
console.log("HELLO".toLowerCase())   // Convert to Lowercase
console.log("\n\r")                 // New Line and Carriage Return
// Methods available in String
/*
1. charAt() : Returns the character at specified index in string
2. indexOf(): Returns the first occurrence index of specified value, returns -1 if not found
3. lastIndexOf(): Returns the last occurrence index of specified value, returns -1 if not
found
4. split(): Breaks up a string into an array of substrings based on a specified separator
5. substr(): Extract part of a string from start index till end index (end index optional
    if not provided it consider till the end of the string).
    6. substring(): Same as SubStr but it doesnot accept negative values for start or end index
    7. toString(): This method will return the primitive value of the object.
    8. valueOf(): Returns the primitive value of the object.
    */
//    var s = "This is a test string.";
//    console.log(s.charAt(4));         
//    console.log(s.indexOf("is"));      
//    console.log(s.lastIndexOf("t"));    
//    console.log(s.split(" "))                                            
//    console.log(s.substr(10,5));       
//    console.log(s.substring(10));                        
//    console.log(s.toString());        
//    console.log(s.valueOf());          
   // bitwise and Strings
   // string
var str = "this is a string";
// var str2 = "xyz";
// var str3 = str + str2 + " wxyz";
// index: 0
// substring
// var res = str.substring(5,2);
// var res = str.indexOf('string');
// var res = str.lastIndexOf('string');
var time = "12:23:20";
var res = time.split(':');
console.log(res);
   