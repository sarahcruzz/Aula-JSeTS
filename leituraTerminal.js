const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Pergunta ao usuário
rl.question('Digite seu nome: ', (answer) => {
    // Resposta do usuário
    console.log(`Seu nome é ${answer}`)

    // Fecha a interface
    rl.close()
})
