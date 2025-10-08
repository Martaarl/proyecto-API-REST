const mongoose = require("mongoose");

const charactersSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    movie: {type: String, required: true}, 
    category: {
        type: String, 
        required: true, 
        enum: ["horror",
             "drama", 
             "comedy", 
             "action", 
             "science fiction", 
             "thriller", 
             "musical"]
    }
}, {
    timestamps: true,
    collection: "characters"
})

const Character = mongoose.model("Character", charactersSchema);
module.exports = Character;