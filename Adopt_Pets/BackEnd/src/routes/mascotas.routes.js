'use strict'

const {Router} = require('express');
const upload = require('../controllers/storage')
const { addPet, listPet, editPet, deletePet } = require('../controllers/mascota.controller');

const api = Router();

api.post('/agregar-pet', upload.single('Imagen'), addPet)
api.get('/listar-pet', listPet)
api.put('/edit-pet/:id', editPet)
api.delete('/delete-pet/:id', deletePet)

module.exports = api;