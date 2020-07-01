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

function extensaoDosArquivos(array, extensao) {
    return array.filter(caminhoDoArquivo => caminhoDoArquivo.endsWith(extensao))
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

module.exports = {
    leituraArquivo,
    extensaoDosArquivos,
    lerArquivo,
    lerArquivos
}