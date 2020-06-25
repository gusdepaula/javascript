// callback é passar uma função como parametro para outra função
function exec (fn, a, b) {
    return fn(a,b)
}

const somarNoTerminal = (x,y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w -z)
const subtrair = (w, z) => w -z

exec(somarNoTerminal, 10, 50)
exec(subtrairNoTerminal, 50, 22)

const resultadoSubtracao = exec(subtrair, 25, 25)
console.log('Resultado subtracao: ', resultadoSubtracao)

