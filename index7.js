// Function 

// Function is a value and a dataype predefined keyword
function add(){
    var x=10;
    var y =5;
    var c=x+y;
    console.log(c)
}
add()
// console.log(add());   // Output: 15
// Arguments in functions
function add1(a,b){
    var c=a+b
    return c;
    }

// Take Parameters in functions  
console.log(add1(3,5))
console.log(add1(3,4))
// Recursive function
function factorial(n){
    if (n==1)
    return 1;
else
return n*factorial(n-1);
}
console.log("Factorial of 6 : "+factorial(6));
// Callback function
var numbers=[2,8,9,4];
numbers.forEach(function(item){
    console.log(item*2);
    });
    // Anonymous callback function
    numbers.forEach(function(item){
        console.log(item/2);
        });
        // Higher Order function
        function multiplyByTwo(arr){
            return arr.map(function(item){
                return item * 2;
                })
                };
                console.log(multiplyByTwo(numbers));