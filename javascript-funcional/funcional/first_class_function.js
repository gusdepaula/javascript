// Diz-se que uma linguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra variável

const x = 3
const y = function(texto) {
    return `Esse aqui é o texto: ${texto}`
}
const z = () => console.log('Zzzzzz!')

console.log(x)
console.log(y('Olá'))
z()