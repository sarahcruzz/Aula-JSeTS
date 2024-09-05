const readline = require('readline'); // cria uma interface para armazenar o valor
// cria a inteface para permitir que o usuário digite os valores no terminal
const rl = readline.create.Interface({
    input: process.stdin,
    output: process.stdout
});

class Cliente{
    constructor(){
        this.nome = "Sarah",
        this.profissao = "DEV",
        this.saldo = 15000
    }

    pix(valor){
        if (valor > this.saldo){
            console.log("Você não tem saldo suficiente para realizar a seguinte operação")
        } else {
            this.saldo -= valor
            console.log(`Pix de R$${valor.toFixed(2)} realizado com sucesso.`)
        }
    }

     emprestimo(valor) {
        this.saldo += valor;
        console.log(`Empréstimo de R$${valor.toFixed(2)} concedido com sucesso.`);
    }

    saque(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        }
    }

    extrato() {
        console.log(`Extrato: Seu saldo atual é de R$${this.saldo.toFixed(2)}.`);
    }

}


rl.question('Qual operação gostaria de realizar: \n1 - Pix \n2 - Empréstimo \n3 - Saque \n4 - Extrato', (escolha) => {
    
    rl.question('Digite o segundo valor: ', (valor2) => {
        // exibe os valores digitados
        console.log('Primeiro valor: ', valor1);
        console.log('Segundo valor:', valor2);
        console.log(valor1 + valor2);
        console.log(Number(valor1) + Number(valor2));

        // fecha a interface de leitura
        rl.close();
    });
});


