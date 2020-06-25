const nums = [1,2,3,4,5]
//MAP FUNCIONA ASSIM:
// Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]))
const dobro = (valorDeElemento, indice, array) => valorDeElemento * 2 + indice + array.length


console.log(nums.map(dobro))

const nome = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = letra => letra[0]

const letras = nome.map(primeiraLetra)

console.log(nome, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const nomeProduto = n => n.nome
console.log(carrinho.map(nomeProduto))

const qtdeXPreco = x => x.qtde * x.preco
const totais = carrinho.map(qtdeXPreco)
console.log(totais)