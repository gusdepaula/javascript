// somar (3)(4)(5)

// function somar (a, b, c){
//     return a + b + c;
// }

function somar (a) {
    return function(b){
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(somar(3)(4)(5))

//calcular (3)(7)(fn)
function calcular (x){
    return function (y){
        return function (fn){
            return fn(x, y)
        }
    }
}

function subtrair (a, b) {
    return a - b
}

function multiplicar (a, b) {
    return a * b
}

const resultado1 = calcular(3)(7)(subtrair)
console.log(resultado1)
const resultado2 = calcular(3)(7)(multiplicar)
console.log(resultado2)