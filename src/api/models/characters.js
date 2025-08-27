const mongoose = require("mongoose");
const { type } = require("os");

const charactersSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    film: {type: String, required: true}, 
    category: {
        type: String, 
        required: true, 
        enum: ["horrorr",
             "drama", 
             "comedy", 
             "action", 
             "science fiction", 
             "thriller", 
             "musical"]
    }
}, {
    timestamps: true,
    collection: "peliculas"
})

const Character = mongoose.model("characters", charactersSchema, "characters");
module.exports = Character;