// Conditional statements 
// calculating aggregate value
function calcAgg(){
    var agg = 70;
 //grade
// Distinction: <75
// First class: >=65 and <75
// Second class: >=55 and <65
// Third class: >=49 and <55

// if else if ladder
if (agg >= 70){
    console.log("Distinction");
}
// else if(agg >=65 && agg <75){
//     console.log("First class");
// }
else if(agg >=55 && agg <65){
    console.log("Second class");
}
else if(agg >=49 && agg <55){
    console.log("Third class");
}else{
    console.log("Failed");

    }

}
calcAgg();
