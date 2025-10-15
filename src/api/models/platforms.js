const mongoose = require("mongoose");

const platformsSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    characters: [{type: mongoose.Types.ObjectId, ref: "Character", required: false}], 
    
}, {
    timestamps: true,
    collection: "platforms"
})

const Platforms = mongoose.model("Platforms", platformsSchema, "platforms");
module.exports = Platforms;