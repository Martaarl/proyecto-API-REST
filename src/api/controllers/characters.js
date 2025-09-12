const Character = require("../models/characters");

Character

const getCharacters = async (req, res, next) => {
    try {
        const characters = await Character.find();
        return res.status(200).json(characters);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getCharactersById = async (req, res, next) => {
    try {
       const { id } = req.params;
       const characters = await Character.findById({id});
       return res.status(200).json(characters);
    } catch (error) {
        return res.status(400).json("Error en la solicitud id");
    }
}

const getCharactersByFilm = async (req, res, next) => {
    try {
        const {film} = req.params;
        const characters = await Character.find({film});
        return res.status(200).json(characters);
    } catch (error) {
        return res.status(400).json("Error en la solicitud film");
    }
}

const postCharacters = async (req, res, next) => {
    try {
        console.log("body recibido", req.body)
        const newCharacter = new Character(req.body);
        console.log(req.body);
        const characterSaved = await newCharacter.save();
        return res.status(201).json(characterSaved);
    } catch (error) {
        return res.status(400).json("Error creando al personaje");
    }
}

const putCharacters = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("estoy pillando el id o no?");
        const characterUpdated = await Character.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json(characterUpdated);
    } catch (error) {
        return res.status(400).json("Error al actualizar al personaje");
    }
}


const deleteCharacters = async (req, res, next) => {
    try {
       const {id} = req.params;
       const characterDeleted = await Character.findByIdAndDelete(id);
       return res.status(200).json(characterDeleted);
    } catch (error) {
        return res.status(400).json("Error al eliminar al personaje")
    }
}

module.exports={
    getCharacters,
    getCharactersById,
    getCharactersByFilm,
    postCharacters,
    putCharacters,
    deleteCharacters
}

