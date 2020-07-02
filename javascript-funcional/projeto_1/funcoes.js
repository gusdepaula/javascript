const fs = require('fs')
const path = require('path')

function leituraArquivo (caminho) {
    return new Promise((resolve, reject) => {
        try {
            const arquivos = fs.readdirSync(caminho)
            const arquivosCompletos = arquivos.map(arquivo => {
                return path.join(caminho, arquivo)
            }) 
            resolve(arquivosCompletos)
        } catch(e) {
            reject(e)
        }
    })
}

function extensaoDosArquivos(extensao) {
    return function(array) {
        return array.filter(caminhoDoArquivo => caminhoDoArquivo.endsWith(extensao))
    }
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch(e) {
            reject(e)
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(
        caminhos.map(caminho => lerArquivo(caminho))
    )
}

function removerSeVazio(array) {
    return array.filter(element => element.trim())
}

function removerSePossuir(texto) {
    return function(array) {
        return array.filter(elemento => !elemento.includes(texto))
    }
}

function removerNumeros(array) {
    return array.filter(elemento => {
        const numero = parseInt(elemento.trim())
        return numero !== numero
    })
}

function removeSimbolos(simbolos) {
    return function(array) {
        return array.map(elemento => {
            return simbolos.reduce((acumulador, simbolo) => {
                return acumulador.split(simbolo).join('')
            }, elemento)
        })
    }
}

function mesclarElementos(array) {
    return array.join(' ')
}

function separarTextoPor(simbolo) {
    return function(texto){
        return texto.split(simbolo)
    }
} 

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acumulador, palavra) => {
        const elemento = palavra.toLowerCase()
        const qtde = acumulador[elemento] ? acumulador[elemento].qtde + 1 : 1
        acumulador[elemento] = {palavra: elemento, qtde: qtde}
        return acumulador
    }, {}))
}

function ordenarPorAtributoNumerico(attr, ordem = 'ascendente') {
    return function(array) {
        const ascendente = (o1, o2) => o1[attr] - o2[attr]
        const descendente = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem == 'ascendente' ? ascendente : descendente)
    }
}


module.exports = {
    leituraArquivo,
    extensaoDosArquivos,
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removerSePossuir,
    removerNumeros,
    removeSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtributoNumerico
}