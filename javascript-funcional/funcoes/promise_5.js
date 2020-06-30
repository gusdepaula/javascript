function funcionarOuNao (valor, chanceErro) {
    return new Promise ((resolve, reject) => {
       try {
           con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
       } catch(excecao) {
           reject(excecao)
       }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => console.log(`Valor: ${valor}`))
    .then(
        valor => consol.log(valor),
        err => console.log(`Erro esperado: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!'))