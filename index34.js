function fn1(obj1){
    obj1.width = 100;
}
function fn2(obj2){
    obj2.width = 80;
}

var m1 = {
    width : 5,
    height : 10,
    color : 'Blue'
};

fn1(m1);
console.log(m1);

// var m2 = m1;
// var m3 = m2;