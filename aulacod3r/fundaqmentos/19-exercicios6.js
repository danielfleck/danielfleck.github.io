let acum = 0
let evenNumbers = []

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenNumbers.push(i)
        acum++
    }
}

console.log(`there are ${acum} even numbers from 0 to 100, inclusive`)
console.log(evenNumbers)