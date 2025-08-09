function evenAndOddNumbers(...numbers) {

    let evenNumbers = []
    let oddNumbers = []

    for (let i in numbers) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i])
        } else {
            oddNumbers.push(numbers[i])
        }

    }

    console.log(`There are ${evenNumbers.length} even numbers and ${oddNumbers.length} odd numbers`)

}

evenAndOddNumbers(1,3,5,6,7,9,0)