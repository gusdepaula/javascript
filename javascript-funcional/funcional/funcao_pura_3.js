// Uma funcao pura é uma funcao em que o valor 
// de retorno é determinado APENAS por seus valores 
// de entrada, sem efeitos colaterais observáveis

let qtdeDeExecucoes = 0

function somar(a, b){
    qtdeDeExecucoes++ //efeitos colaterais observáveis
    return a + b
}

console.log(qtdeDeExecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qtdeDeExecucoes)