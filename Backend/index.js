const express = require("express");
const cors = require("cors");
const connectDB = require("./Database/db");


const app = express();
const PORT = 5000;

 
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

connectDB();
app.use(express.json());
app.use("/api/auth", require("./Routes/routes"));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
