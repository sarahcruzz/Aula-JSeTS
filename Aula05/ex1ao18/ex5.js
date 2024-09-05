class Livro{
    constructor(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }

}

novo_livro = new Livro('a menina feita de espinhos', 'ferrnanda monteiro', 2016, 'drama', )

console.log(novo_livro)