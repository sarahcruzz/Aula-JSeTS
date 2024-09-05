const readline = require('readline') // cria uma constante para armazenar o valor

// cria a interface para que o usuário digite os valores no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let litrosGasolina, valorGasto
const valorGasolina = 5.50

rl.question("Quantos litros de gasolina você irá abastecer: ", (litrosGasolina) => {
    valorGasto = valorGasolina * litrosGasolina
    console.log(`O valor gasto em gasolina foi de R$${valorGasto}`)

    rl.close()
})