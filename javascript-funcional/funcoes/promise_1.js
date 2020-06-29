const primeiraPessoa = valor => valor[0]

const primeiraLetra = primeiraLetra => primeiraLetra[0]

const letraMinuscula = letra => letra.toLowerCase()


new Promise (function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiraPessoa)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
