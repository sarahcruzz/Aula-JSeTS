class Fruta{
    constructor(){
        this.sabor = "doce",
        this.nome = "laranja",
        this.cor = "verde",
        this.peso = 400,
        this.diasColheita = 5,
        this.isMadura = null // o atributo pode ser opcional, inicializado como null
    }

    madura(diasParaMadurar){
        if(diasParaMadurar >= this.diasColheita){
            console.log(`A fruta ${this.nome} está madura`)
        } else {
            console.log(`A fruta ${this.nome} não está madura`)
        }
    }   
}

const Tangerina = new Fruta()
Tangerina.madura(6)