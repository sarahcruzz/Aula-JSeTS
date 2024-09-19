const anoAtual = new Date().getFullYear()

const livro = {
    "título": 'Dom Casmurro',
    "autor": 'Machado de Assis',
    "anoDePublicação": 1899,
    "gênero": 'Romance',
    "idadePublicacao": anoAtual - 1899
}

livro["gênero"] = "Aventura"

console.log(livro)