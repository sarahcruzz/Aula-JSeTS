class Usuario{
    constructor(){
        this.nome = null,
        this.login = null,
        this.senha = null,
        this.cpf = null,
        this.celular = null
    }

    exibirInfo(){
        console.log(`Nome do usuário: ${this.nome}`)
        console.log(`Login: ${this.login}`)
        console.log(`Senha: ${this.senha}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Celular: ${this.celular}`)
    }

    verificaLogin(user, senha){
        if((user == this.login) && (senha == this.senha)){
            console.log('Login correto.')
            console.log(`Seja bem-vindo(a) ${user}`)
        } else {
            console.log('Login incorreto.')
            console.log(`Tente novamente!`)
        }
    }
}

const Usuario1 = new Usuario() // cria um objeto Usuario1 a partir da classe Usuario
Usuario1.nome = "Sarah"
Usuario1.login = "sarahcruzz"
Usuario1.senha = "sarah123"
Usuario1.cpf = "123.567.891-10"
Usuario1.celular = "19995506767"
Usuario1.exibirInfo();
Usuario1.verificaLogin("sarahcruzz", "sarah123")
