const object = {
    _valor : 1,
    get valor() { return this._valor++ },
    set valor(value) { this._valor = value }
}

console.log(object.valor, object.valor, object.valor = 9, object.valor)