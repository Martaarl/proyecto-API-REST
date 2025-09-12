require('dotenv').config(); 
const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require('./src/config/db');
const characterRouter = require('./src/api/routes/characters');
const platformsRouter = require('./src/api/routes/platforms')

const app = express();

app.use(express.json());

connectDB();

app.use("/api/characters", characterRouter);
app.use("/api/platforms", platformsRouter);

app.use((req, res) => {
    return res.status(404).json("Route not found");
})

app.listen(3000, () => {
    console.log("Servidor levantado en: http://localhost:3000")
})