'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: String,
    email: String,
    password: String,
    rol: {
        type: String,
        String: ['ADMIN', 'USER'],
        default: 'USER'
    }
})
module.exports = mongoose.model('user', userSchema)