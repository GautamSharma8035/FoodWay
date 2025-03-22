const express = require("express");
const { registerUser } = require("../controllers/registerControllers");
const { loginUser } = require("../controllers/loginControllers");


const router = express.Router();

// Register and login routes
router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;
