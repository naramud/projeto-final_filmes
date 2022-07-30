const express = require ('express')

const app = express()

app.use(express.json())

const filmesRotas = require ('./routes/filmesRoutes')

app.use ('filmes', filmesRotas) // rota raiz

module.exports = app