const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/register");

const SECRET_KEY = "Anirudh@@123"

const loginUser = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    if (!mobile || !password) {
      return res.status(400).json({ message: "Mobile and password are required" });
    }

    const user = await User.findOne({ mobile });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" }); // 🔹 Generic error message
    }

    // ✅ JWT Token generate karo
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser };
