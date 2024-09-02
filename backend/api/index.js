const express = require("express");
const cors = require("cors");

const PORT = process.env.API_PORT || 3000;
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
