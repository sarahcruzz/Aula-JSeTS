class Usuario{
    constructor(){
        this.nome = null,
        this.idade
    }

    exibeInfo(){
        console.log(`Nome ${this.nome}, idade ${this.idade}`)
    }
}

class Cliente extends Usuario{
    constructor(){
        super()
        this.cargo = null
    }

    exibeInfoCargo(){
        console.log(`Nome ${this.nome}, idade ${this.idade}, cargo ${this.cargo}`)
    }
}

const novoCliente = new Cliente()
novoCliente.nome = "Sarah"
novoCliente.idade = 19
novoCliente.cargo = "Dev Backend"
novoCliente.exibeInfoCargo()

