// Funções que operam em outras funções
// tomando-as como argumentos ou retornando-as
// são chamadas de higher-order functions.

function executar(fn, ...params) {
    return function(textoIncial) {
        return `${textoIncial} ${fn(...params)}`
    }
}

function somar(a, b, c) {
    return a + b + c
}

function multiplicar(a, b) {
    return a * b
}

const resultado1 = executar(somar, 3, 4, 5)('O resultado da soma é:')
const resultado2 = executar(multiplicar, 2, 4)('O resultado da multiplicação é:')

console.log(resultado1)
console.log(resultado2)