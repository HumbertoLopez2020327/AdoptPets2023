'use strict'

const express = require("express")
const app =express();
const {connection}=require("./src/database/connection");
require('dotenv').config();
const cors = require("cors");
const port = process.env.PORT;
const User = require('./src/routes/user.routes')
const Mascota = require('./src/routes/mascotas.routes');
const Comentarios = require('./src/routes/comentario.routes');
connection();



app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/public', express.static(`${__dirname}/src/imgs`))
app.use('/api', Mascota, Comentarios, User);


app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
