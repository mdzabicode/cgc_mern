// repeatedly
// 	.then(function() { return new Promise((resolve, reject) => setTimeout(()
// loops: for,while

//loop invarient
// initialisation :1
// modification inside loop : i++ or arr[i] = ...
// increment:n
// value at end : n+1
// initialisation
// condition
// body
// increment
// forward loop

for (var i=1;i<=100;i++){
console.log("i");
}

// print 100 to 1
// lower,upper,invarient modification
for (var i=100;i>=10;i--);{
    console.log("i");
}
// infinite loop
for (;;){
    console.log("Hello");

    if(i==10){
        break;
    }
}
for (var i=1 ;i<=10 ;i++){
    var j = 2*i;
if(i <= 5)continue;
    console.log(i);
}

// nested loop
// outer loop variable is not accessible from inner scope
for (var i=0; i<=10;i++){
    for (var j=0;j<=10 ;j++){
        console.log(i + "* " +j);

    }
}


// arrays: object, list
// 64bit
//  similar data type
// function , arrays
var phoneNumbers = [1, 2, 3, 4, 5, 6, 7];
// var marks = [1, "abc", "def"];

var id = 123;
var marks = [50, 60, 70, 80, 60, 50];

// stack
// marks.push(80);
// marks.pop();

// Queue
// marks.unshift(10);
// marks.shift();

// marks.slice(0, 3)

// deleting
// marks.splice(2, 2);

// searching
var res = marks.lastIndexOf(60);

console.log(res);




var names = ["abc", "def", "ghi"];

var passed = [true, false, true, false];

// 2d array
// N*N
// matrix 2*3
var arr = [
    [1, 2, 3],
    [4, 5, 6]
];
/*
    1   2   3
    4   5   6
*/

console.log(arr[1][2]);

