const express = require('express') // importação do Express
const Book = require('../models/Book') // importação do modelo de livro Book
const router = express.Router() // criamos o roteador

// método post
router.post('/', async (req, res) => {
    const { title, author, year } = req.body // extraindo os dados da requisição
    try {
        const newBook = new Book({ title, author, year})
        await newBook.save() // salvando o novo livro criado
        res.status(201).json(newBook) // retornando o livro criado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar livro', error})
    }
})

// método get
router.get('/', async (req, res) => {
    try {
        const books = await Book.find() // buscamos todos os livros
        res.status(200).json(books) // retornando a lista de livros
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error})
    }

})

// método put
router.put('/:id', async (req, res) => {
    const { title, author, year } = req.body // extraindo os novos dados
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year }, { new: true}) // atualizando as informações do livro pelo id
        res.status(200).json(updateBook) // retornando o livro com as informações atualizadas
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error})
    }

})

// método delete
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id) // deletando o livro pelo id
        res.status(200).json({ message: 'Livro deletado com sucesso'}) // livro deletado, mensagem de sucesso
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar livro', error})
    }
})

// exportando o roteador para que possa ser usado no server.js
module.exports = router