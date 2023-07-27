'use strict'

const { Router } = require("express");
const { check } = require("express-validator")
const { crearComentario, listarComentarios, editarComentario, eliminarComentario }  = require('../controllers/comentario.controller');


const api = Router();
// Rutas
api.post("/comentarios",crearComentario);
api.get("/comentarios",listarComentarios);
api.put("/comentarios/:id",editarComentario);
api.delete("/comentarios/:id",eliminarComentario);

module.exports = api;



