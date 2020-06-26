const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true }
]

// filter, map, reduce

//1. fragil: true
const produtoFragil = item => item.fragil

const filtroDosProdutosFrageis = carrinho.filter(produtoFragil)

console.log(`Filtro dos produtos frágeis: \n `, filtroDosProdutosFrageis)


//2. qtde: 4, preco: 27.10 -> total
const qtdePreco = item => item.qtde * item.preco

const mapeandoPrecos = filtroDosProdutosFrageis.map(qtdePreco)

console.log(`Map dos valores x quantidade de produtos: \n`, mapeandoPrecos)

// 3. media total dos valores 
const pegarMedia = (acumulador, elemento) => {
    const novaQtde = acumulador.qtde + 1
    const novoTotal = acumulador.total + elemento
    return {
        qtde: novaQtde, 
        total: novoTotal, 
        media: novoTotal / novaQtde
    }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
    .filter(produtoFragil)
    .map(qtdePreco)
    .reduce(pegarMedia, mediaInicial)

console.log(media)