const User = require("../models/register");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
    try {
        const { fullName, mobile, email, password, confirmPassword } = req.body;

        if (!fullName || !mobile || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email!" });
        }
        console.log(existingUser)

        const existingMobile = await User.findOne({ mobile: mobileNumber });
        if (existingMobile) {
            return res.status(400).json({ message: "Mobile Number already exists" });
        }
        

        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = new User({
            fullName,
            mobile,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User Registered Successfully!" });

    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
