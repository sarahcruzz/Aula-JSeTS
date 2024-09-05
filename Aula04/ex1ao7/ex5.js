// 5- Criar uma classe denominada Máquinas
// Com os seguintes atributos:
// Nome da máquina
// Quantidade de eixos
// Rotações por minuto
// Consumo de energia elétrica
// Essa classe deve ser mae de outras classes.
// Criar classe denominada furadeira herdando o nome da máquina, rotações por minuto,
// consumo de energia elétrica.
// Criar métodos para ligar, desligar a máquina e um método para ajustar a velocidade de
// rotação da máquina.

class Maquinas{
    constructor(){
        this.nome = 'maquina',
        this.qtdeixos = 6,
        this.rotpormin = 120,
        this.consumo = "500 kwh",
        this.maquinaLigada = true
    }

}

class Furadeira extends Maquinas{
    constructor(){
        super()
    }

    ligarMaquina(){
        this.maquinaLigada = true
    }

    desligarMaquina(){
        this.maquinaLigada = false
    }

    ajusteVelocidade(rotacao){
        this.rotpormin = rotacao
    }

    mostrarInfo(){
        console.log(`Máquina ligada: ${this.maquinaLigada} \nRotações p/ minuto: ${this.rotpormin} \nQuantidade de eixos: ${this.qtdeixos} \nConsumo: ${this.consumo}`)
    }
}

const furadeira = new Furadeira()
furadeira.ajusteVelocidade(195)
furadeira.desligarMaquina()
furadeira.mostrarInfo()
