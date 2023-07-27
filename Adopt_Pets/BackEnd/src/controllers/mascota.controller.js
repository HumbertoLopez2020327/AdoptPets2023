'use strict'
const Mascota = require('../models/Mascotas');

const addPet = async (req, res) => {
    try {
        let pet = new Mascota();
        pet = new Mascota(req.body);
        if (req.file) {
            const { filename }= req.file
            pet.setImagen(filename)
        }
        pet = await pet.save();
        res.status(200).send({ msg: 'Se creó correctamente', pet });
    } catch (err) {
        console.log(err);
    }
}


const listPet = async(req, res) => {
    try{
        const pets = await Mascota.find();
        if (pets.length == 0) return res.status(404).send({msg: 'No se encontraron mascotas'});
        return res.status(200).json({msg: 'Se encontraron las siguietnes mascotas', pets});
    }catch (err){
        console.log(err);
    }
}

const editPet = async(req, res) => {
    try{
        const id = req.params.id;
        const editPet = {...req.body};

        const petcomplete = await Mascota.findByIdAndUpdate(id, editPet, {new: true, });

        if(petcomplete){
            return res.status(200).send({
                msg: 'Se actualizarón correctamente los datos', petcomplete
            });
        }
    }catch (err) {
        console.log(err);
    }
}

const deletePet = async(req, res) => {
    try{
        const id = req.params.id;
        const petD = await Mascota.findByIdAndDelete(id);
        return  res.status(500).send({ msg: `mascota eliminada correctamente`, petD});
    }catch (err){
        console.log(err);
    }
};

module.exports = {
    addPet,
    listPet,
    editPet,
    deletePet,
}