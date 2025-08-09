console.log("Teste instalação do node.js");
console.log("Node.js está instalado corretamente.");
console.log("Versão do Node.js: " + process.version);

let idade = 45;
console.log(typeof idade);
console.log(typeof 45);
console.log(typeof 45.0);

console.log(typeof true);

// área de circunferência

let raio = 5;
const PI = 3.14;
let area = PI * raio * raio;
let cumprimento = 2 * PI * raio;
console.log("Área da circunferência: " + area + " m²"); 
console.log("Cumprimento da circunferência: " + cumprimento + " m");

let a = 1;
let b = 2;
let aux;

/* aux = a;
a = b;
b = aux;
*/

[a, b] = [b, a]
console.log("Valor de a: " + a);
console.log("Valor de b: " + b);
console.log("Valor de aux: " + aux);
console.log("Fim do teste.");

console.log("Olá");
console.log("mundo!")

let peso1 = 75.2
let peso2 = Number(80.555)

console.log( typeof peso1);
console.log( typeof peso2);

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

console.log(peso1.toFixed(2));
console.log(peso2.toFixed(2));

console.log(peso1.toString(16));

