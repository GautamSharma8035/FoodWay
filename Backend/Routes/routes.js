const express = require("express");
const { registerUser } = require("../controllers/registerControllers");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
