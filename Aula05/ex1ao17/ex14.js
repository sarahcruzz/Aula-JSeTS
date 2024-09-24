const pessoa = {
    nome: 'Carla',
    idade: 19,
    solteiro: false,
    hobbies: ['tocar piano', 'esportes', 'jogar jogos eletrônicos'],
    endereco: {
        rua: "rua almeida",
        cidade: "sumaré",
        estado: "são paulo"
    }
}

function mostrarInfoPessoa(pessoa) {
    console.log("Nome: " + pessoa.nome + " (Tipo: " + typeof pessoa.nome + ")")
    console.log("Idade: " + pessoa.idade + " (Tipo: " + typeof pessoa.idade + ")")
    console.log("Solteiro: " + pessoa.solteiro + " (Tipo: " + typeof pessoa.solteiro + ")")
    console.log("Hobbies: " + pessoa.hobbies + " (Tipo: " + typeof pessoa.hobbies + ")")
    console.log("Endereço \nRua: " + pessoa.endereco.rua + " (Tipo: " + typeof pessoa.endereco.rua + ")")
    console.log("Cidade: " + pessoa.endereco.cidade + " (Tipo: " + typeof pessoa.endereco.cidade + ")")
    console.log("Estado: " + pessoa.endereco.estado + " (Tipo: " + typeof pessoa.endereco.estado + ")")
}


mostrarInfoPessoa(pessoa)