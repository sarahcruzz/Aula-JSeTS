class Automovel{
    constructor(){
        this.cor,
        this.modelo,
        this.combustivel,
        this.qtdrodas,
        this.motorLigado
    }

    ligarMotor(){
        this.motorLigado = true
    }

    desligarMotor(){
        this.motorLigado = false
    }

    statusMotor(){
        console.log(`Motor ligado: ${this.motorLigado}`)
    }
}

class Carro extends Automovel{
    constructor(){
        super(),
        this.vidroAberto
    }

    abrirVidro(){
        this.vidroAberto = true
    }

    fecharVidro(){
        this.vidroAberto = false
    }

    statusVidro(){
        console.log(`Vidro aberto: ${this.vidroAberto}`)
    }

}

class Moto extends Automovel{
    constructor(){
        super()
    }
}

class Caminhao extends Automovel{
    constructor(){
        super(),
        this.vidroAberto
    }

    abrirVidro(){
        this.vidroAberto = true
    }

    fecharVidro(){
        this.vidroAberto = false
    }

    statusVidro(){
        console.log(`Vidro aberto: ${this.vidroAberto}`)
    }
}

const carrinho = new Carro()
const motinha = new Moto()
const caminhaozinho = new Caminhao()

console.log("Informações do carro")
carrinho.cor = "azul"
carrinho.modelo = "opala"
carrinho.combustivel = "gasolina"
carrinho.qtdrodas = 4

carrinho.ligarMotor()
carrinho.statusMotor()
carrinho.desligarMotor()
carrinho.statusMotor()

carrinho.abrirVidro()
carrinho.statusVidro()
carrinho.fecharVidro()
carrinho.statusVidro()

console.log("\nInformações da Moto")
motinha.cor = "roxo"
motinha.modelo = "cb300"
motinha.combustivel = "gasolina"
motinha.qtdrodas = 2

motinha.ligarMotor()
motinha.statusMotor()
motinha.desligarMotor()
motinha.statusMotor()

console.log("\nInformações do Caminhão")
caminhaozinho.cor = "prata"
caminhaozinho.modelo = "Mercedes"
caminhaozinho.combustivel = "diesel"
caminhaozinho.qtdrodas = 6

caminhaozinho.ligarMotor()
caminhaozinho.statusMotor()
caminhaozinho.desligarMotor()
caminhaozinho.statusMotor()

caminhaozinho.abrirVidro()
caminhaozinho.statusVidro()
caminhaozinho.fecharVidro()
caminhaozinho.statusVidro()