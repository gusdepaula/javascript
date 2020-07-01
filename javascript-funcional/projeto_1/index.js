const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const arquivos = fn.leituraArquivo(caminho)
console.log(arquivos)