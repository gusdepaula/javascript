const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')'
]

fn.leituraArquivo(caminho)
    .then(fn.extensaoDosArquivos('.srt'))
    .then(fn.lerArquivos)
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSePossuir('-->'))
    .then(fn.removerNumeros)
    .then(fn.removeSimbolos(simbolos))
    .then(console.log)