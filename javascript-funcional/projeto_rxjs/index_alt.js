const fn = require('./funcoes')
const path = require('path')
const _ = require('lodash')
const { toArray, map, groupBy, mergeMap, reduce } = require('rxjs/operators')
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
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({palavra: palavras[0], qtde: palavras.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)
