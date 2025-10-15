require('dotenv').config();
const charactersData = require("../../src/data/charactersData");
const mongoose = require("mongoose");
const Character = require("../../src/api/models/characters");

const seedCharacters = async () => {
    try {
        console.log("Conectando a:", process.env.DB_URL);
        await mongoose.connect(process.env.DB_URL);

        for (const char of charactersData) {
            const allCharacters = await Character.findOne({
                name: char.name,
            });
            
            if (!allCharacters){
                await Character.create(char);
            }
            else {
                console.log("El personaje que intentas crear ya existe")
            }
        }
    }

    catch (error){
        console.log(error)
    }

    finally {
        mongoose.disconnect();
    }
}

seedCharacters();