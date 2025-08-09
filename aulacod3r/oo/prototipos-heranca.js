const grandfather = {
    attr1: "A"
}

const father = {
    __proto__: grandfather,
    attr2: "B"
}

const child = {
    __proto__: father,
    attr3: "C"
}

console.log(child.__proto__.__proto__)

console.log(child.attr1)