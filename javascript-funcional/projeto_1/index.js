const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')', '<font color=#ffff00 size=14>wwwtvsubtitlesnet</font>'
]

const palavrasMaisUsadas = fn.composicao(
    fn.leituraArquivo,
    fn.extensaoDosArquivos('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerSeVazio,
    fn.removerSePossuir('-->'),
    fn.removerNumeros,
    fn.removeSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerSeVazio,
    fn.removerNumeros,
    fn.agruparElementos,
    fn.ordenarPorAtributoNumerico('qtde', 'descendente')
)

palavrasMaisUsadas(caminho)
    .then(console.log)
