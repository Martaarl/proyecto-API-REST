const characters = require("../../data/charactersData");
const Character = require("../models/characters");

const getCharacters = async (req, res, next) => {
    try {
        const characters = await Character.find();
        return res.status(200).json(characters);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const getCharactersById = async (req, res, next) => {
    try {
       const { id } = req.params;
       const characters = await Character.findById(id);

       if(!characters) {
        return res.status(404).json({error: "Character not found"})
       }

       return res.status(200).json(characters);

    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const getCharactersByMovie = async (req, res, next) => {
    try {
        const {movie} = req.params;
        const characters = await Character.find({movie});

        if(!characters.length) {
            return res.status(404).json({error: "No characters found for this movie"})
        }

        return res.status(200).json(characters);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const postCharacters = async (req, res, next) => {
    try {
        const newCharacter = new Character(req.body);
        const characterSaved = await newCharacter.save();
       
        return res.status(201).json(characterSaved);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const putCharacters = async (req, res, next) => {
    try {
        const { id } = req.params;
        const character = await Character.findById(id);

        if (!character){
            return res.status(400).json({error: "Character not found"})
        }

        character.name = req.body.name || character.name;
        character.image = req.body.image || character.image;
        character.movie = req.body.movie || character.movie;
        character.category = req.body.category || character.category;


        const characterUpdated = await character.save();
        
        
        return res.status(200).json(characterUpdated);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}


const deleteCharacters = async (req, res, next) => {
    try {
       const {id} = req.params;
       const characterDeleted = await Character.findByIdAndDelete(id);

        if(!characterDeleted){
            return res.status(400).json({error: "Character not found"})
        }

       return res.status(200).json(characterDeleted);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports={
    getCharacters,
    getCharactersById,
    getCharactersByMovie,
    postCharacters,
    putCharacters,
    deleteCharacters
}

