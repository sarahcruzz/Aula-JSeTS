const livro = {}

const anoAtual = new Date().getFullYear()

livro.titulo = "A menina feita de espinhos"
livro.autor = "Fabiane Ribeiro"
livro.anoPublicacao = 2020
livro.genero = "Romance"
livro.idadePublicacao = anoAtual - livro.anoPublicacao 

console.log(livro["titulo"])
console.log(livro["autor"])
console.log(livro["anoPublicacao"])
console.log(livro["genero"])
console.log(livro["idadePublicacao"])

