const livro = {}

const anoAtual = new Date().getFullYear()

livro.titulo = "A menina feita de espinhos"
livro.autor = "Fabiane Ribeiro"
livro.anoPublicacao = 2020
livro.genero = "Romance"
livro.idadePublicacao = anoAtual-livro.anoPublicacao
livro.avaliacao = null



if (livro.avaliacao == null){
    livro.avaliacao = "5 estrelas"
    console.log(livro)
} else {
    console.log("O livro já possui uma avaliação")
}