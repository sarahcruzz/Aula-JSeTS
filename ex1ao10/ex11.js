const readline = require('readline') // cria uma constante para armazenar o valor

// cria a interface para que o usuário digite os valores no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let salarioBruto, salarioLiquido
const impostoRenda = 20

rl.question("Digite o valor em reais do salário bruto: R$", (salarioBruto) => {
    salarioLiquido = salarioBruto - (salarioBruto * 20 / 100)
    console.log(`o valor do salário líquido é R$${salarioLiquido}`)

    rl.close()
})