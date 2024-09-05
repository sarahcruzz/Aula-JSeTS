let pessoa = {
    nome : 'Isadora',
    idade: 19,
    profissão: 'Estudante',
    saudacao: function(){
        console.log("Olá! Seja bem viada!");
    }
}
pessoa.time = "São Paulo"

console.log(pessoa)
//console.log(pessoa.saudacao())
console.log(pessoa.idade) // acessa uma informação específica do objeto pessoa