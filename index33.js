// two types

// value type and reference types

var x = 20;
var y = x; //copy

// ++x;

// console.log(x,y);

function fn(a){
    ++a;

    console.log("value of parameter a",a);
}

// value type 

var x = 20;
fn(x);

console.log("x is ",x);
