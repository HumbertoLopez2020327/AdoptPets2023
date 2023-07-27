'use strict'
const { Router } = require("express")
const { createUser, readUsers, loginUser } = require("../controllers/user.controller")

const api = Router()

api.post("/create-user", createUser)
api.get("/list-user", readUsers)
api.post("/login", loginUser)

module.exports = api;