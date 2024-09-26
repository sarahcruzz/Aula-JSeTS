const express = require('express') // importando a biblioteca express
const app = express() // instância da aplicação express
const port = 3000 // porta que esta rodando o servidor

// cria uma rota GET na raiz '/' 
app.get('/', (req, res) => {
    res.send('Bem vindo à minha API')
})

// iniciar o servidor e começa a escutar as requisições que são feitas na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})