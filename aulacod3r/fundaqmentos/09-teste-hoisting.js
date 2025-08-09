var a = 10;

console.log(a); // 10

function f() {
    console.log(a);
    //var a = 5;
}
f()

function g() {
    console.log(a);
    var a = 5;
}
g()