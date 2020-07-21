const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')', '<font color=#ffff00 size=14>wwwtvsubtitlesnet</font>', '!'
]

fn.leituraArquivo(caminho)
    .pipe(
        fn.extensaoDosArquivos('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerSeVazio(),
        fn.removerNumeros(),
        fn.removeSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerSeVazio(),
        fn.removerNumeros(),
    )
    .subscribe(console.log)

// const palavrasMaisUsadas = fn.composicao(
//     fn.mesclarElementos,
//     fn.agruparElementos,
//     fn.ordenarPorAtributoNumerico('qtde', 'descendente')
// )

// palavrasMaisUsadas(caminho)
//     .then(console.log)
