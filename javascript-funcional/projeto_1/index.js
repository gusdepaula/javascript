const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.leituraArquivo(caminho)
    .then(arquivos => fn.extensaoDosArquivos(arquivos, '.srt'))
    .then(arquivosSTR => fn.lerArquivos(arquivosSTR))
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas => fn.removerSeVazio(linhas))
    .then(linhas => fn.removerSePossuir(linhas, '-->'))
    .then(console.log)