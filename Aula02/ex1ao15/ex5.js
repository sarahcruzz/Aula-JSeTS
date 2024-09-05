// usando var para declarar variável
var valor1 = 10

if (1 > 0) {
    var valor2 = 20
    console.log(valor1)
    console.log(valor2)
}

console.log(valor1)
console.log(valor2)

console.log("-" * 26)

// usando let para declarar variável
let valor3 = 5

if (1 > 0) {
    let valor4 = 10
    console.log(valor3)
    console.log(valor4)
}

console.log(valor3)
console.log(valor4)

// fazendo dessa última forma com o let, o resultado é um erro, 
// pois não conseguimos exibir uma variável que está em escopo de bloco