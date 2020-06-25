//importar duas bibliotecas presentes no próprio node - File System(fs) e Path
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

console.log(caminho)

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

//READ FILE FUNCTION
// function readFile(path: string | number | Buffer | URL, options: {
//     encoding?: null;
//     flag?: string;
// }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void

console.log('Início...')
fs.readFile(caminho, {},  exibirConteudo)
fs.readFile(caminho, {}, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

console.log('Início Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')