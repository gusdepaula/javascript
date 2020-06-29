const fs = require('fs')
const path = require('path')

function leituraArquivo (caminho) {
    

    return new Promise(resolve => {
        fs.readFile(caminho, {},  (_, conteudo) => resolve(conteudo.toString()))
    })

    
}

const caminho = path.join(__dirname, 'dados.txt')

leituraArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo1 => `O valor final é: ${conteudo1}`)
    .then(console.log)
