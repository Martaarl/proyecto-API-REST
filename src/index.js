const express = require("espress");

const app = express();

//BORRAR/ DATOS PARA ESTUDIAR - esta de abajo es la que hace que no de de error a la hora de abrir un servido
app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
})

app.listen(3000, () => {
    console.log("Servidor levantado en: http://localhost:3000")
})