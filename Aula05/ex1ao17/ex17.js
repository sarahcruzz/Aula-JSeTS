const contaBancaria = {
    titular: "Julia Lopes",
    saldo: 2500,

    depositar(valor){
        this.saldo += valor
        console.log(`Você despositou R$${valor} \nSaldo Atual: R$${this.saldo}`)
    },

    sacar(valor){

        if (this.saldo > valor){
            this.saldo -= valor
        console.log(`Você sacou R$${valor} \nSaldo Atual: R$${this.saldo}`)
        } else{
            console.log("Você não possui saldo suficiente")
        }
        
    }
}

const cliente = {
    nome: "julia lopes",
    conta: contaBancaria
}

function mostrarSaldo() {
    console.log(`Cliente: ${this.nome}`);
    console.log(`Saldo da conta: R$${this.conta.saldo}`);
  }
  
cliente.conta.depositar(500);  
cliente.conta.sacar(200);      
  
mostrarSaldo.call(cliente)