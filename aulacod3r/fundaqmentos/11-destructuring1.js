// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// const { nome: name, idade: age, endereco: address, cep : c = true} = pessoa


// const { nome, idade } = pessoa
// console.log(nome, idade)

// const { nome: n, idade: i } = pessoa
// console.log(n, i)

// const { sobrenome, bemHumorada = true } = pessoa
// console.log(sobrenome, bemHumorada)

// const { endereco: { logradouro, numero, cep } } = pessoa
// console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa
// console.log(ag, num)

const [a,b,c,d] = [1, 2, 3, 4] ;
console.log(a, b, c, d)

// Pode ser usado com arrays, com objetos, em atributos de função
