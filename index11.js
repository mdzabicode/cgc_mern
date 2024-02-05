// multiplication table
// 1. Write a program that generates and displays the multiplication table for numbers from 1 to
for (var i=1; i<=20; i++){
    for (var j=1; j<=10; j++){
        var val = i+j;
        console.log(i + " + " + j + " = " + val);
   }  
    console.log("------------------------"); 
}
// conditional statements
// functions, objects
function calc(marks){
    // length, slice, splice, push, pop, shift, unshift
    // aggregate    

    var marksSecured = marks[0] + marks[1] + marks[2]
    + marks[3] + marks[4] + marks[5];

var totalMarks = marks.length * 100;
var agg = (marksSecured / totalMarks) * 100;
console.log(Math.round (agg));
}

var m1 = [50,50,40,60,70,100];
var m2 = [60,50,40,60,72,100];
var m3 = [60,50,40,60,70,100,60];

calc(m1);
calc(m2);
calc(m3);

