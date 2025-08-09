const marcas = ['audi', 'bmw', 'mercedes', 'volkswagen']

// funtion to show brands with index and array length
const showBrands = (brand, index, arr) => console.log(`${index + 1}. ${brand.toUpperCase()} - Array length: ${arr.length}`)



const grades = [5.5, 6.0, 7.5, 8.0, 9.0]

let lowerThanSeven = []

for (let i in grades) {
    console.log(`Grade: ${grades[i]}`)
    
    if (grades[i] <= 7.0) {
        lowerThanSeven.push(grades[i])
    }
}

console.log('Grades lower than 7.0:', lowerThanSeven)

grades.forEach((grade, index, arr) => {
    console.log(`Grade: ${grades[index]}`)
    
    if (grade < 7.0) {
        lowerThanSeven.push(grades[index])
    }
})

console.log('Grades lower than 7.0:', lowerThanSeven)

filterLowGrades = function(grade, index) {
    return grade < 7.0
}

let lowGrades = grades.filter((grade, index) => grades[index] < 7.0)

console.log('Grades lower than 7.0:', lowGrades)

lowGrades = grades.filter(filterLowGrades)

console.log('Grades lower than 7.0:', lowGrades)


console.log(grades.filter((grade) => grade < 7 ))

grades.reduce((acum, grade) => acum + grade,0 )

function average(grades) {

    const total = grades.reduce((acum, grade) => acum + grade, 0)

    return total / grades.length;

}

console.log(average(grades))