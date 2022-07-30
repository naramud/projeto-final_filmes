const controller = require ('../controllers/filmesController')

const express = require ('express')

const router = express.Router()

//router.get('/filmes', controller.getAllfilmes);
//router.get('/filmes/buscar/:id', controller.getBuscar)
//router.post("/filmes", controller.addFilmes)
router.patch('/atualizar/:id', controller.updateTitle)
router.delete('/filmes/:id', controller.deleteFilmes)

module.exports = router