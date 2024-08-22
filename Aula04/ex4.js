class Animal{
    constructor(){
        this.nome = null, 
        this.idade = null
    }

    // método da classe base
    fazerSom(){
        console.log(`${this.nome} faz um som`)
    }
}

// a classe cachorro está herdando os atributos da classe animal
class Cachorro extends Animal{
    constructor(){
        // chama o construtor da classe base
        super(),
        this.raca
    }

    // Método sobrescrito
    fazerSom() {
      console.log(`${this.nome} late.`);
    }
    // Método adicional
    exibirInfo() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`);
    }
}

const Rocky = new Cachorro();
Rocky.nome = "Rocky";
Rocky.idade = "2";
Rocky.raca = "Cachorro"
Rocky.exibirInfo();