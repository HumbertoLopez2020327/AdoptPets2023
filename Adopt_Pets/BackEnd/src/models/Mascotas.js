'use strict'
 
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mascotasSchema = Schema({
    Raza: {
        type: String,
        required: true, 
    },
    Peso: {
        type: String,
        required: true,
    },
    Genero: {
        type: String,
        required: true,
    },
    Estado: {
        type: String,
        required: true,
        enum: ['En Adopcion']
    },
    TipodeMascota: {
        type: String,
        required: true,
    },
    Imagen:{
        type: String,
        required: false,
    }
});

mascotasSchema.methods.setImagen = function Imagen( filename ){
    this.Imagen = `http://localhost:3000/public/${filename}`
}

module.exports = mongoose.model('mascota', mascotasSchema)