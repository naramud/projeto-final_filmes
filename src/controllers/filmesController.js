const {req, resp, request} = require ('../app')

const getAllfilmes = (req, resp) => {
    try{
        resp.status(200).json([{
            'filmes': filmes
        }])
    } catch (err) {
        resp.status(500).send({message: 'Erro no server'})
    }
}

const getBuscar = (req, resp) => {
    try {
        resp.status(200).json([{
            'filmes': filmes
        }])
    } catch (err) {
        resp.status(500).send({message: 'Erro no server'})
    }
}

const addFilmes = (req, resp) => {
    let nameRequest = request.body.name
    let titleRequest = request.body.title
    let filmesRequest = request.body.filmes

    let newTitle = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        title: titleRequest,
        filmes: filmesRequest
    }

    filmes.push(newTitle)
    resp.status(201).json([{
        'message': 'Novo filme adicionado',
        newTitle
    }])
}

const updateTitle = (req, resp) => {
    const idRequest = request.params.id

    let filmesNovos = request.body.title

    filmes = filmes.find(filmes => filmes.id == idRequest)

    filmes.title = filmesNovos

    resp.status(200).json([{
        'messagem': 'Seu filme foi atualizado',
        filmes
    }])
}
const deleteFilmes = (req, resp) => {
    const idRequest = request.params.id

    const indiceFilmes = filmes.findIndex(filmes.id == idRequest)

    filmes.splice(indiceFilmes, 1)

    resp.status(200). json([{
        'messagem': 'filme deletado :)',
        'deletado': idRequest,
        filmes
    }])
}

module.exports = {
    getAllfilmes,
    getBuscar,
    addFilmes,
    updateTitle,
    deleteFilmes
}