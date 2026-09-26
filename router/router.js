const express = require("express");
const router = express.Router();
const userApp = require("./api/user");

router.use("/", userApp)

module.exports = router