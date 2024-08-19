const readline = require('readline');
// cria ua interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// pergunta ao usuário 
rl.question('Digite algo: ', (answer) ==> {
   
    // resposta do usuário
    console.log (`Você digitou: ${answer}`)
   
    // fecha a interface
    rl.close();
});
console.log(readline);