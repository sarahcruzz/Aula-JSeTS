const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES",
    seguroSocial: "1234-567-9",
    cpf: "12345678910"
}

console.log(pessoa.cpf.substring(0,4) + "*******")
console.log(pessoa.carteiraIdentidade.substring(0,4) + "****")
   
