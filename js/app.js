console.log ('fizz buzz')


for(let i = 0; i < 100; i++) {
    const numero = i + 1
    let stampa = numero

    const cella = document.createElement('div')

    if (numero % 3 === 0 && numero % 5 === 0) {
        stampa = 'FizzBuzz'
        // console.log('fizzbuzz')

    } else if (numero % 3 === 0){  
        stampa = 'Fizz'
    // console.log('fizz')

    } else if (numero % 5 === 0){
        stampa = 'Buzz'
        // console.log('buzz')
    }
    console.log(stampa)
}