require('dotenv').config(); 
const express = require('express');
const mongoose = require("mongoose");
const { connectDB } = require('./src/config/db');

const app = express();



connectDB();

//BORRAR/ DATOS PARA ESTUDIAR - esta de abajo es la que hace que no de de error a la hora de abrir un servido
app.use((req, res) => {
    return res.status(404).json("Route not found");
})

app.listen(3000, () => {
    console.log("Servidor levantado en: http://localhost:3000")
})