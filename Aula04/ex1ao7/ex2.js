class Pessoa{
    constructor(){
        this.nome,
        this.idade,
        this.profissao,
        this.salario
    }

    exibeTrabalho(nomeEmpresa, tempoTrabalho){
        console.log(`Empresa: ${nomeEmpresa}, Tempo de trabalho: ${tempoTrabalho} anos`)
    }
}

const pessoa1 = new Pessoa()
pessoa1.nome = "Marcia"
pessoa1.idade = 43
pessoa1.profissao = "professora"
pessoa1.salario = 12000

pessoa1.exibeTrabalho("SENAI", 5)