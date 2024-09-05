// 6- Criar uma classe denominada Produtos e deve ter os seguintes parâmetros:
// Nome do produto
// Quantidade
// Preço do produto
// Tipo de comunicação
// Consumo de energia elétrica
// Essa classe produtos deve ser mãe de outras classes como fritadeira, televisão, 
// ar-condicionado.
// As classes filhas devem possuir métodos:
// Ligar, desligar, ajuste de temperatura com passagem de parâmetros para setpoint

class Produtos{
    constructor(){
        this.nome,
        this.quantidade,
        this.preco,
        this.tipoComunicacao,
        this.consumo,
        this.ligado = false
    }

    
    ligar(){
        this.ligado = true
    }

    desligar(){
        this.ligado = false
    }
}

class Fritadeira extends Produtos{
    constructor(){
        super()
    }

}


class Televisao extends Produtos{
    constructor(){
        super()
    }
    
}

class ArCondicionado extends Produtos{
    constructor(){
        super(),
        this.temperatura = 19
    }

    ajusteTemperatura(graus){
        this.temperatura = graus
    }
    
}

const minhaFritadeira = new Fritadeira('Fritadeira Philips', 10, 150, 'Bluetooth', 1.5)
minhaFritadeira.ligar()
minhaFritadeira.desligar()

const minhaTelevisao = new Televisao('Televisão Samsung', 5, 2000, 'Wi-Fi', 0.2)
minhaTelevisao.ligar()
minhaTelevisao.desligar()

const meuArCondicionado = new ArCondicionado('Ar Condicionado LG', 3, 2500, 'Infrared', 1.2)
meuArCondicionado.ligar()
meuArCondicionado.ajusteTemperatura(25)
meuArCondicionado.desligar()