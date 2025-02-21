const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/bfhl", (req, res) => {
    try {
        const inputData = req.body.data;
        if (!inputData || !Array.isArray(inputData)) {
            return res.status(400).json({ is_success: false, error: "Invalid JSON input" });
        }

        const numbers = inputData.filter(x => !isNaN(x));
        const alphabets = inputData.filter(x => /^[A-Za-z]$/.test(x));
        const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

        res.json({
            is_success: true,
            user_id: "aastha_gohel_30092004",
            email: "22BCS11249@cuchd.in",
            roll_number: "22BCS11249",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highestAlphabet
        });
    } catch (err) {
        res.status(500).json({ is_success: false, error: err.message });
    }
});

app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
