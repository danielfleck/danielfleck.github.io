let max = 0
let min = 0

let numbers = [1,3,8,4,5,6,8,9,3,33,3,5,67,99,1,0,-1]

for (let i in numbers) {
    if (numbers[i] >= max) {
        max = numbers[i]
    }
    if (numbers[i] <= min) {
        min = numbers[i]
    }
}

console.log(`max: ${max} min: ${min}`)