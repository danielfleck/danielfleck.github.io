c = function(t) {
    console.log(t)
}

// exercicio 1

function execute(a, b) {
    console.log(`Executing with ${a} and ${b}`)

    console.log(`Sum: ${a + b}`);
    console.log(`Subtraction: ${a - b}`)
    console.log(`Multiplication: ${a * b}`)
    console.log(`Division: ${a / b}`)
}

execute(10, 5)

// exercicio 2

function kindOfTriangle(a, b, c) {
    if (a === b && b === c) {
        return 'Equilateral Triangle'
    } else if (a === b || b === c || a === c) {
        return 'Isosceles Triangle'
    } else {
        return 'Scalene Triangle'
    }
}

console.log(kindOfTriangle(1,2,2))

//3

function pow(number, power) {
    return Math.pow(number,power);
}

c(pow(4,4));

function pow2(number, power) {
    let result = number;
    for(let i=1; i< power ; i++) {
        result *= number
    }
    return result
}

c(pow2(2,1))
c(pow2(2,2))
c(pow2(2,8))

// 5 

function convertToReal(value) {
    value = Number.parseFloat(value)
    value = value.toFixed(2)
    value = `R$ ${value}`

    return value.replace(/[.]/g, ",")

}

c(convertToReal(0.30))

// 6

function simpleInterest(value, rate, time) {

    return convertToReal(value + (value * rate * time))

}

c(simpleInterest(100, 0.1, 2))

function compoundInterest(value, rate, time) {
    return convertToReal(value * (Math.pow(1 + rate, time)))
}

c(compoundInterest(100, 0.1, 2))

// 7

function solveQuadraticEquation(a, b, c) {

    let delta = (b * b) - (4 * a * c)

    let result = []

    if (delta < 0) {
        return "Não possui raízes reais."
    } else if (delta == 0) {
        x1 = (-1 * b) / 2 * a
        x2 = x1
    } else {
        x1 = ((-1 * b) + (Math.sqrt(delta,2))) / 2 * a
        x2 = ((-1 * b) - (Math.sqrt(delta,2))) / 2 * a
    }

    result.push(x1)
    result.push(x2)

    return result

}

c(solveQuadraticEquation(1, -4, 4))
c(solveQuadraticEquation(1, -5, 6))

//8

let resultado = "10 20 20 8 25 3 0 30 1"

function performanceTest(values) {

    const valuesArr = values.split(" ")

    const ValuesArrInNumber = valuesArr.map(v => Number.parseInt(v))

    let bestValue = ValuesArrInNumber[0]

    let numberOfBestPerformance = 0

    for (let i = 1; i < ValuesArrInNumber.length; i++) {

        if (ValuesArrInNumber[i] > bestValue) {
             bestValue = ValuesArrInNumber[i]
            numberOfBestPerformance++
        }

    }

    return numberOfBestPerformance

}

c(performanceTest(resultado))