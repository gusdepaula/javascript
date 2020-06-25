//arrow function
const felizNatal = () => console.log('Feliz Natal!!')
felizNatal()

const saudacao = nome => `Fala ${nome}! Blz?`
console.log(saudacao('Gustavo'))

const somar = (...numeros) => {
    console.log(`Esse array [${numeros}] é verdadeiro:`, Array.isArray(numeros))
    let total = 0;
    for(let n of numeros) {
        total += n
    }
    return total
}
console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6))
console.log(somar(1,2,3,4,5,6,7,8,9,10))

const potencia =  base =>  exp => Math.pow(base, exp)
console.log(potencia(3)(4))

const subtrair = (a,b) => a - b
console.log('Subtrair 4 - 1 =', subtrair(4,1))

//this
Array.prototype.ultimo = function() {
    console.log(this[this.length -1])//pega o ultimo elemento do array
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [1,2,3]
numeros.ultimo()
numeros.primeiro()