console.log("Variables and Values: ");
var x = 5;
var z = x * 2;
console.log(x);
console.log(z);
//var declares globally

let x1 = 2;
let z1 = x1 * 3;
console.log(x1);
console.log(z1);
//let limits declarations to the scope of a block statement or expression
console.log("Arrays and Loops: ");
const testArr = [1, 2, 3, 4, 5];
//creating a const array holding integers

//iterating through the array until we reach the end, printing the element
//to console
for(const element of testArr) {
    console.log(element);
}

console.log("Functions: ");
function checkEven(a) {
    if (a % 2 == 0) {
        return "even";
    } else {
        return "false";
    }
}