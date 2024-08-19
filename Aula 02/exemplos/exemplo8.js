const readline = require('readline'); // cria uma interface para armazenar o valor
// cria a inteface para permitir que o usuário digite os valores no terminal
const rl = readline.create.Interface({
    input: process.stdin,
    output: process.stdout
});

// pergunta o primeiro valor 
rl.question('Digite o primeiro valor: ', (valor1) ==> {
    // pergunta o segundo valor 
    rl.question('Digite o segundo valor: ', (valor2) ==> {
        // exibe os vaores digitados
        console.log('Primeiro valor: ', valor1);
        console.log('Segundo valor:', valor2);
        console.log(valor1 + valor2);
        console.log(Number(valor1) + Number(valor2));

        // fecha a interface de leitura
        rl.close();
    });
});