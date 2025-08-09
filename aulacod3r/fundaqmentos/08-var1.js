var a = 3;

function f() {
    console.log(a);
}

f();

console.log(a);

var number = 5;
{
    var number = 10;
    console.log(number);
}
console.log(number);

// global scope
var globalVar = "I am global";

// block scope
{
    var blockVar = "I am block scoped";
    console.log(globalVar);
    console.log(blockVar);
}

// function scope
function f() {
    var functionVar = "I am function scoped";
    console.log(globalVar);
    console.log(blockVar);
    console.log(functionVar);
}

f();

console.log(globalVar);
console.log(blockVar);
//console.log(functionVar); não existe fora da função


console.log("let: ");

// global scope
let globall = "I am global";

// block scope
{
    let blockl = "I am block scoped";
    console.log(globall);
    console.log(blockl);
}

// function scope
function h() {
    let functionl = "I am function scoped";
    console.log(globall);
    //console.log(blockl);
    console.log(functionl);
}

h();

console.log(globall);
//console.log(blockl);
//console.log(functionVar); não existe fora da função

for (var i=0; i < 5; i++) {
    console.log(i);
}

console.log(i);

for (let j=0; j < 5; j++) {
    console.log(j);
}

console.log(j);