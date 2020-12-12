const textoPar = "par"
const textoImpar = "impar"

for(let index = 0; index <= 10; index++) {
    const decisao = index % 2 === 0 ? textoPar : textoImpar
    console.log(`O numero ${index} e ${decisao}`)
}

