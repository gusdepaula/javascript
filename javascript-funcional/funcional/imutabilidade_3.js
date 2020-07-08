const pessoa = Object.freeze({
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: 'Nome da Rua' 
    })
})

// Atribuição por referência
const outraPessoa = pessoa

// Passagem por referência
function alteraPessoa(pessoa) {
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'Rua ABC'
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(outraPessoa)
console.log(novaPessoa)

let a = 3
let b = a //atribuição por valor(copia do valor da variável)

a++
b--

console.log(a, b)