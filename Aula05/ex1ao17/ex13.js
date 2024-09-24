const pessoa = {
    nome: 'Carla',
    idade: 19,
    solteiro: false,
    hobbies: ['tocar piano', 'esportes', 'jogar jogos eletrônicos']
}

function mostrarInfoPessoa(pessoa) {
    console.log("Nome: " + pessoa.nome + " (Tipo: " + typeof pessoa.nome + ")");
    console.log("Idade: " + pessoa.idade + " (Tipo: " + typeof pessoa.idade + ")");
    console.log("Solteiro: " + pessoa.solteiro + " (Tipo: " + typeof pessoa.solteiro + ")");
    console.log("Hobbies: " + pessoa.hobbies + " (Tipo: " + typeof pessoa.hobbies + ")");
}


mostrarInfoPessoa(pessoa)