const mongoose = require("mongoose");
//const { type } = require("Characters");

const platformsSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    film: [{type: mongoose.Types.ObjectId, ref: "characters", required: false}], 
    
}, {
    timestamps: true,
    collection: "platforms"
})

const Platforms = mongoose.model("Platforms", platformsSchema, "platforms");
module.exports = Platforms;