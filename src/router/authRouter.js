const express = require("express");

// Doc : https://expressjs.com/en/guide/routing.html
const router = express.Router();

// controllers
const AuthController = require("../controllers/AuthController");

router.post("/register", AuthController.register);

module.exports = router;
