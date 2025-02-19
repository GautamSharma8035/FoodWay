const express = require("express");
const cors = require("cors");
const connectDB = require("./Database/db");

const app = express();
const PORT = 5000;

// Enable CORS for frontend (make sure the frontend is running on the correct port)
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Connect to the database
connectDB();

app.use(express.json());

app.use("/api/auth", require("./Routes/routes"));  

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
