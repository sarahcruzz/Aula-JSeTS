const { Console } = require('console')
const readline = require('readline') // cria uma constante para armazenar o valor

// cria a interface para que o usuário digite os valores no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



rl.question("Digite seu peso em kg: ", (peso) => {
    
    rl.question("Digite sua altura em cm: ", (altura) => {
        let imc = peso / (altura * altura)
        rl.close()

        if(imc < 18.5){
            console.log(`seu imc: ${imc.toFixed(2)} - Abaixo do peso normal`)
        } else if(imc >= 18.5 && imc < 24.9){
            console.log(`seu imc: ${imc.toFixed(2)} - Peso normal`)
        } else if(imc >= 25 && imc < 29.9){
            console.log(`seu imc: ${imc.toFixed(2)} - Excesso de peso`)
        } else if(imc >= 30 && imc < 34.9){
            console.log(`seu imc: ${imc.toFixed(2)} - Obesidade classe I`)
        } else if(imc >= 35 && imc < 39.9){
            console.log(`seu imc: ${imc.toFixed(2)} - Obesidade classe II`)
        } else {
            console.log(`seu imc: ${imc.toFixed(2)} - Obesidade classe III`)
        }
    })
})

