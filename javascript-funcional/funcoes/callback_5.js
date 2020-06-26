const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const qtdeXPreco = x => x.qtde * x.preco
const somar = (acumulador, elemento) => acumulador + elemento

const totais = carrinho.map(qtdeXPreco)
const totalGeral = totais.reduce(somar)
console.log(`O total geral é de R$${totalGeral}`)

//CRIANDO MEU PROPRIO REDUCE
Array.prototype.meuReduce = function (fn, valorInicial) {
    let acumulador = valorInicial
    for (let i = 0; i < this.length; i ++) {
        if(!acumulador && i === 0) {
            acumulador = this[i]
            continue
        } else {
            acumulador = fn(acumulador, this[i], i, this)
        }
    }
    return acumulador
}

const totalGeral2 = totais.meuReduce(somar)
console.log(`O total geral do MEU REDUCE é de R$${totalGeral2}`)
