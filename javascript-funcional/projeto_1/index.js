const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')', '<font color=#ffff00 size=14>wwwtvsubtitlesnet</font>'
]

function agruparPalavras(palavras) {
    return palavras.reduce((agrupamento, palavra) => {
        const p = palavra.toLowerCase()
        if(agrupamento[p]) {
            agrupamento[p] += 1
        } else {
            agrupamento[p] = 1
        }
        return agrupamento
    }, {})
}

fn.leituraArquivo(caminho)
    .then(fn.extensaoDosArquivos('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSePossuir('-->'))
    .then(fn.removerNumeros)
    .then(fn.removeSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerNumeros)
    .then(agruparPalavras)
    .then(console.log)