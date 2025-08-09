const car = {
    brand: "GM"
}

console.log(typeof car)

//função construtura
function Product(name, price, discount) {
    this.name = name
    this.price = price
    this.discount = discount

    this.getPriceWithDiscount = () => (price * (1 - discount)).toFixed(2)
}

object = new Product ("casa", 100000, 0.1);

console.log(object.getPriceWithDiscount())

//função factory
function createEmployee (name, salary) {
    return {
        name,
        salary
    }
}

const john = createEmployee("John", 1000)
const mary = createEmployee("Mary", 1020)

console.log(john, mary)

const a = 1
const b = 2
const c = {name: "nome"}

const obj = {
    a,
    b,
    c
}

function testReference(param) {
    param.name = 9
}

testReference(c)

console.log(obj)