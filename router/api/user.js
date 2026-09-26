const express = require("express");
const userApp = express.Router();
const UserController = require("../../controllers/user.controller");
const userController = new UserController()

userApp.get("/", userController.getUser);

module.exports = userApp