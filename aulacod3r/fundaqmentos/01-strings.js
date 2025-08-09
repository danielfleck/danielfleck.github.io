const escola = 'Escola 3 de javascript 3';

console.log(escola.charAt(0)); // E
console.log(escola.charAt(1)); // s
console.log(escola.charAt(2)); // c

console.log(escola.charCodeAt(5)); // 97 (código ASCII de 'a')
console.log(escola.indexOf('3')); // 7 (posição do primeiro '3')
console.log(escola.indexOf('javascript')); // 10 (posição de 'javascript')

console.log(escola.substring(0, 6)); // Escola

console.log(escola.concat(escola, '!')); // Escola 3 de javascript 3Escola 3 de javascript 3!

console.log(escola.replace('javascript', 'JS')); // Escola 3 de JS 3
console.log(escola.replace(/3/g, ' - '));

console.log("Ana, Maria, Pedro".split(',')); // ['Ana', ' Maria', ' Pedro']
console.log("Ana, Maria, Pedro".split(/, /g)); 


let template = `Escola : ${escola} `;

console.log(template); // Escola : Escola 3 de javascript 3

console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const up = texto => texto.toUpperCase();

console.log(`em maiúsculas: ${up(escola)}`); // em maiúsculas: ESCOLA 3 DE JAVASCRIPT 3

