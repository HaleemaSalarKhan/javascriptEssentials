// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    let a = 3;
    const b =5;
    var c = 7;

    a=4;
    //b=6; //Throws scope_lab.js:38 Uncaught TypeError: Assignment to constant variable.
    c=8;
    console.log(a);
    console.log(b);
    console.log(c);
}
a=5;
b=7;
c=9;
console.log(a);
console.log(b);
console.log(c);// yes they can be assigned out of block, but they are considered as new variables


