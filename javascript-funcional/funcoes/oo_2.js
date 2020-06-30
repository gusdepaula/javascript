class Produto {
    constructor (nome, preco, desconto = 0.5){
        this._nome = nome
        this.preco = preco
        this.desconto = desconto
    }
    //getter
    get nome() {
        return `Produto: ${this._nome}`
    }
    //getter
    get preco() {
        return this._preco
    }
    //setter
    set preco(novoPreco) {
        if(novoPreco >= 0){
            this._preco = novoPreco
        }
    }
    //setter
    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    //Get chama a funcao como se fosse um atributo
    get precoComDesconto() {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('Caneta', 2.59)
//p1.nome = 'caneta'
p1.preco = -20
console.log(p1.nome)
console.log(p1.preco)

const p2 = new Produto('Geladeira', 10000, 0.8)
console.log(p2.preco)
console.log(p2.precoComDesconto)