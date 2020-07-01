const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.leituraArquivo(caminho)
    .then(arquivos => fn.extensaoDosArquivos(arquivos, '.srt'))
    .then(console.log)