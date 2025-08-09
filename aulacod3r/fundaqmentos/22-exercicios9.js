let numbers = [1,3,8,4,5,6,8,9,3,33,3,5,67,99,1,0,-1]

total = numbers.reduce( (acum, n) => acum += n, 0)

console.log((total / numbers.length).toFixed(2))

let vetorInteger = [1, 2, 3, 4]
let vetorString = ["a", "b", "c"]
let vetorDouble = [1.2, 2.3, 3.4]

vetorISD = (vetorInteger.concat(vetorString).concat(vetorDouble))

console.log(vetorISD)

vetorISD = [...vetorInteger, ...vetorString, ...vetorDouble]

console.log(vetorISD)