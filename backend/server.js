require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoute = require('./routes/productRoute');

connectDB();

const app = express();

const PORT  = process.env.PORT || 5000;

// to use json data
app.use(express.json());

app.use('/api/products',productRoute)

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));