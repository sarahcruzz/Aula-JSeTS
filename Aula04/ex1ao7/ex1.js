class Carro{
    constructor(){
        this.marca,
        this.modelo,
        this.ano,
        this.motorLigado
    }

    ligarMotor(){
        this.motorLigado = true
    }

    desligarMotor(){
        this.motorLigado = false
    }

    statusMotor(){
        console.log(`Carro ligado: ${this.motorLigado}`)
    }

}

const carrinho = new Carro()
carrinho.marca = "Mitsubishi"
carrinho.modelo = "Lancer"
carrinho.ano = 2020

carrinho.ligarMotor()
carrinho.statusMotor()

carrinho.desligarMotor()
carrinho.statusMotor()