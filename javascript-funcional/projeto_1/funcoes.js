const fs = require('fs')
const path = require('path')

function leituraArquivo (caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo)) 
            resolve(arquivos)
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
            let textoSemSimbolos = elemento
            simbolos.forEach(simbolo => {
                textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
            });
            return textoSemSimbolos
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
    separarTextoPor
}