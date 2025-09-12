const express = require("express");
const { getCharacters, getCharactersById, getCharactersByFilm, putCharacters, postCharacters, deleteCharacters } = require("../controllers/characters");

getCharacters
getCharactersById
getCharactersByFilm
putCharacters
postCharacters
deleteCharacters

const characterRouter = express.Router();

characterRouter.get("/film/:film", getCharactersByFilm)
characterRouter.get("/:id", getCharactersById);
characterRouter.get("/", getCharacters);
characterRouter.post("/", postCharacters);
characterRouter.put("/:id", putCharacters);
characterRouter.delete("/:id", deleteCharacters);


module.exports = characterRouter;