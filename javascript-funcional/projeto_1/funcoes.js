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

module.exports = {
    leituraArquivo,
    extensaoDosArquivos
}