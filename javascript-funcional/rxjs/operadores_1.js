// Os dois tipos...
// 1. Operadores de criação
const { of } = require('rxjs')

// 2. Operadores Encadeáveis(pipeble operator)
const { last, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'ultimo')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontra foi: ${v}`)
    )
    .subscribe(function(valor) {
        console.log(valor)
    })