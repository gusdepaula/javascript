const nums = [1,2,3,4,5]
//MAP FUNCIONA ASSIM:
// Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]))
const dobro = (valorDeElemento, indice, array) => valorDeElemento * 2 + indice + array.length


console.log(nums.map(dobro))

const nome = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = letra => letra[0]

const letras = nome.map(primeiraLetra)

console.log(nome, letras)