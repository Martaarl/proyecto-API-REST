const { default: mongoose } = require("mongoose");
const Platforms = require("../models/platforms");


const getPlatform = async (req, res, next) => {
    try {
        const platforms = await Platforms.find().populate("characters");
        return res.status(200).json(platforms);
    } catch (error) {
        return res.status(400).json({error: error.message});
        };
}

const getPlatformById = async (req, res, next) => {
    try {
       const { id } = req.params;
       const platforms = await Platforms.findById(id).populate("characters");

        if(!platforms){
            return res.status(400).json({error: "Platform not found"})
        }

       return res.status(200).json(platforms);
    } catch (error) {
        return res.status(400).json({error:error.message});
    }
}


const postPlatform = async (req, res, next) => {
    try {
        const newPlatforms = new Platforms(req.body);
        const platformsSaved = await newPlatforms.save();
        return res.status(201).json(platformsSaved);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const putPlatform = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = {
            name : req.body.name ,
            image : req.body.image 
        }

         if(req.body.characters && Array.isArray(req.body.characters)){
            updateData.$addToSet = {characters: {$each: req.body.characters}}
            };

        const updatePlatform = await Platforms.findByIdAndUpdate(id, updateData, {new: true, runValidators: true});

        if (!updatePlatform) {
            return res.status(404).json({error: "Plataforma no encontrada"})
        }
        return res.status(200).json(updatePlatform);
    } catch (error) {
        return res.status(500).json({error: "error actualizando la plataforma", details: error});
    }
}


const deletePlatform = async (req, res, next) => {
    try {
       const {id} = req.params;

       if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "ID inválido"})
       }
       const platformsDeleted = await Platforms.findByIdAndDelete(id);

      if (!platformsDeleted) { 
        return res.status(404).json({error: "Platform not found"})
        }

       return res.status(200).json(platformsDeleted);
    
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports={
    getPlatform,
    getPlatformById,
    postPlatform,
    putPlatform,
    deletePlatform}

