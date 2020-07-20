const {from, Observable} = require('rxjs')

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

function primeiro() {
    return createPipebleOperator(subscriber => ({
        next(v) {
            subscriber.next(v)
            subscriber.complete()
        },
        complete() {}
    }))
}

function nenhum() {
    return createPipebleOperator(subscriber => ({
        next(v) {
            subscriber.complete()
        }
    }))
}


function ultimo() {
    let ultimo
    return createPipebleOperator(subscriber => ({
        next(v) {
            ultimo = v
        },
        complete() {
            if(ultimo !== undefined) {
                subscriber.next(ultimo)
            }
            subscriber.complete()
        }
    }))
}

from([1, 2, 3, 4, 5])
    .pipe(
        primeiro(),
        //nenhum(),
        // ultimo()
    )
    .subscribe(console.log)