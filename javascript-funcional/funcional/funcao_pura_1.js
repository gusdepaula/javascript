// Uma funcao pura é uma funcao em que o valor 
// de retorno é determinado APENAS por seus valores 
// de entrada, sem efeitos colaterais observáveis

const PI = 3.14

//função impura - PI é um valor externo!
function areaCircunferencia(raio) {
    return raio * raio * PI
}

console.log(areaCircunferencia(10))

//função Pura
function areaCircunferenciaPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircunferenciaPura(10, 3.14))