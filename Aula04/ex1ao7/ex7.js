class Livros{
    constructor(nome, quantidade, preco, autor, numEdicao, livroEmprestado){
        this.nome = nome,
        this.quantidade = quantidade,
        this.preco = preco,
        this.autor = autor,
        this.numEdicao = numEdicao,
        this.livroEmprestado = livroEmprestado
    }

    emprestarLivro(nome, autor){
        this.livroEmprestado = `${nome} - ${autor}`
        this.quantidade = this.quantidade - 1
        console.log(`Você emprestou o livro ${nome} - ${autor}`)
    }

    
    devolverLivro(nome, autor){
        this.livroEmprestado = ""
        this.quantidade = this.quantidade + 1
        console.log(`Você devolveu o livro ${nome} - ${autor}`)
    }
}

const livro = new Livros("dom casmurro", 5, 20.90, "Machado de Assis", 3)
livro.emprestarLivro("dom casmurro", "machado de assis")
livro.devolverLivro("dom casmurro", "machado de assis")

