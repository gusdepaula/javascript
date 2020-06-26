const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const nomeProduto = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
//FILTER FUNCIONA ASSIM:
// (method) Array<{ nome: string; qtde: number; preco: number; }>.filter<S>(callbackfn: (value: {
//     nome: string;
//     qtde: number;
//     preco: number;
// }, index: number, array: {
//     nome: string;
//     qtde: number;
//     preco: number;
// }[])
const itensComEstoque = carrinho
    .filter(qtdeMaiorQueZero)
    .map(nomeProduto)
console.log('Esses itens temos estoque', itensComEstoque.toString())

//CRIANDO MEU PROPRIO FILTER
Array.prototype.meuFilter = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i ++) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const itensComEstoque2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(nomeProduto)
console.log('Filtrei com meu filter e esses itens temos estoque', itensComEstoque2.toString())