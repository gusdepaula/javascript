//Função construtora
function Produto(nome, preco, desconto = 0.15){
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoComDesconto = function() {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('Caneta', 2.59)
console.log(p1.nome)
const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoComDesconto())