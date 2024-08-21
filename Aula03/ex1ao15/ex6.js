let saldo = 2000
let deposito = 450
let saque = 320

let operacao = saldo + deposito;
console.log("Saldo após depósito: " + operacao);
saldo = operacao; // atualiza o saldo

operacao = saldo - saque;
console.log("Saldo após saque: " + operacao);
saldo = operacao; // atualiza o saldo

console.log("Saldo final na conta: " + saldo);