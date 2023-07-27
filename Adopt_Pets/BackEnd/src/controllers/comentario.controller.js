'use strict'
const Comentario = require('../models/comentario.model');


// Función para crear un nuevo comentario
const crearComentario = async (req, res) => {
    try {
      const { comentario, fecha, hora } = req.body;
      const nuevoComentario = new Comentario({ comentario, fecha, hora });
      await nuevoComentario.save();
      res.status(201).json(nuevoComentario);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el comentario" });
    }
  };
  
  // Función para obtener todos los comentarios
const listarComentarios = async (req, res) => {
    try {
      const comment = await Comentario.find();
      if(comment.length==0){
          return res.status(404).send({msg:"no se encontraron Comentarios"})

      }
     return res.status(200).json({msg:"Se encontraron comentarios" , comment});
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los comentarios" });
    }
  };
  
  // Función para editar un comentario existente
const editarComentario = async (req, res) => {
    try {
      const { comentario, fecha, hora } = req.body;
      const comentarioActualizado = await Comentario.findByIdAndUpdate(
        req.params.id,
        { comentario, fecha, hora },
        { new: true }
      );
      res.json(comentarioActualizado);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el comentario" });
    }
  };
  
  // Función para eliminar un comentario
const eliminarComentario = async (req, res) => {
    try {
      await Comentario.findByIdAndRemove(req.params.id);
      res.json({ message: "Comentario eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el comentario" });
    }
  };

module.exports = {
  crearComentario,
  listarComentarios,
  eliminarComentario,
  editarComentario
}