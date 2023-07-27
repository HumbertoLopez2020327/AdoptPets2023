'use strict'

const User = require('../models/User')
const { generateJWT } = require("../helpers/create-jwt")


const createUser = async (req, res) => {
      const { email } = req.body;
      try {
        let user = await User.findOne({ email: email });
        if (user) {
          return res.status(400).send({
            message: "Un usuario ya existe con este correo",
            ok: false,
            user: user,
          });
        }
        user = new User(req.body);
  
        //Guardar Usuarios
        user = await user.save();
        res.status(200).send({
          message: `Usuario ${user.username} creado correctamente`,
          user
        });
      } catch (err) {
        throw new Error(err);
      }
    
  };
  const readUsers = async (req, res) => {
    try {
      const users = await User.find();
  
      if (!users) {
        res.status(404).send({ message: "No hay usuarios disponibles" });
      } else {
        res.status(200).json({ users: users, comentario: "Hola " });
      }
    } catch (err) {
      res.status(404).send({
        message: "No se pudo listar los usuarios",
        err,
      });
    }
  };

 const loginUser = async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .send({ ok: false, message: "El usuario no existe" });
      }
      const token = await generateJWT(user.id, user.username, user.email);
      res.json({
        ok: true,
        uid: user.id,
        name: user.username,
        email: user.email,
        rol: user.rol,
        token,
      });
    } catch (err) {
      throw new Error(err);
    }
  };
  module.exports = { createUser, readUsers, loginUser }