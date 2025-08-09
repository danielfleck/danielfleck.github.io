

function calculateAverageGrade(student, ...grades) {

    let average = 0
    let result = "FAILED"
    let total = 0
    let weight = 0

    let grade1
    let grade2
    let grade3

    highGrade = Math.max(...grades)



    for (let i in grades) {
        if (grades[i] == highGrade) {
            total += grades[i] * 4
            weight += 4
        } else {
            total += grades[i] * 3
            weight += 3
        }
    }

    average = total / weight

    if (average >= 5 ) {
        result = "PASSED"
    }

    return `${student} grades: ${grades.join(", ")} Average: ${average} ${result}`
}

console.log(calculateAverageGrade('José', 5, 6, 8))

