const Platforms = require("../models/platforms");

Platforms

const getPlatform = async (req, res, next) => {
    try {
        const platforms = await Platforms.find().populate("film");
        return res.status(200).json(platforms);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getPlatformById = async (req, res, next) => {
    try {
       const { id } = req.params;
       const platforms = await Platforms.findById(id);
       return res.status(200).json(platforms);
    } catch (error) {
        return res.status(400).json("Error en la solicitud id");
    }
}


const postPlatform = async (req, res, next) => {
    try {
        console.log("body recibido", req.body)
        const newPlatforms = new Platforms(req.body);
        console.log(req.body);
        const platformsSaved = await newPlatforms.save();
        return res.status(201).json(platformsSaved);
    } catch (error) {
        return res.status(400).json("Error creando al personaje");
    }
}

const putPlatform = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("estoy pillando el id o no?");
        const platformsUpdated = await Platforms.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json(platformsUpdated);
    } catch (error) {
        return res.status(400).json("Error al actualizar al personaje");
    }
}


const deletePlatform = async (req, res, next) => {
    try {
       const {id} = req.params;
       const platformsDeleted = await Platforms.findByIdAndDelete(id);
       return res.status(200).json(platformsDeleted);
    } catch (error) {
        return res.status(400).json("Error al eliminar al personaje")
    }
}

module.exports={
    getPlatform,
    getPlatformById,
    postPlatform,
    putPlatform,
    deletePlatform}

