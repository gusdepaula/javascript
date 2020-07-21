const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function leituraArquivo (caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch(e) {
            subscriber.error(e)
        }
    })
}

function extensaoDosArquivos(extensao) {
    return createPipebleOperator(subscriber => ({
        next(texto) {
            if(texto.endsWith(extensao)) {
                subscriber.next(texto)
            }
        }
    }))
}

function lerArquivo() {
    return createPipebleOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
                subscriber.next(conteudo.toString())
                subscriber.complete()
            } catch(e) {
                subscriber.error()
            }
        }
    }))
}

function removerSeVazio() {
    return createPipebleOperator(subscriber => ({
        next(texto) {
            if(texto.trim()) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerNumeros() {
    return createPipebleOperator(subscriber => ({
        next(texto) {
            const numero = parseInt(texto.trim())
            if(numero !== numero) {
                subscriber.next(texto)
            }
        }
    }))
}

function removeSimbolos(simbolos) {
    return createPipebleOperator(subscriber => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce(
                (acumulador, simbolo) => {
                return acumulador.split(simbolo).join('')
            }, texto)
            subscriber.next(textoSemSimbolos)
        }
    }))
}

function mesclarElementos(array) {
    return array.join(' ')
}

function separarTextoPor(simbolo) {
    return createPipebleOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subscriber.next(parte)
            })
        }
    }))
} 

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acumulador, palavra) => {
        const elemento = palavra.toLowerCase()
        const qtde = acumulador[elemento] ? acumulador[elemento].qtde + 1 : 1
        acumulador[elemento] = {palavra: elemento, qtde: qtde}
        return acumulador
    }, {}))
}

function ordenarPorAtributoNumerico(attr, ordem = 'ascendente') {
    return function(array) {
        const ascendente = (o1, o2) => o1[attr] - o2[attr]
        const descendente = (o1, o2) => o2[attr] - o1[attr]
        return [...array].sort(ordem == 'ascendente' ? ascendente : descendente)
    }
}

function createPipebleOperator(operaratorFn) {
    return function(source) {
        return Observable.create(subscriber => {
            const sub = operaratorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            })
        })
    }
}


module.exports = {
    leituraArquivo,
    extensaoDosArquivos,
    lerArquivo,
    removerSeVazio,
    removerNumeros,
    removeSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtributoNumerico
}