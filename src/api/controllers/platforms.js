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
        const platform = await Platforms.findById(id);

        if (!platform) {
            return res.status(400).json({error: "Platform not found"})
        }
        
       platform.name = req.body.name || platform.name;
       platform.image = req.body.image || platform.image;

        if(req.body.characters && Array.isArray(req.body.characters)){
            req.body.characters.forEach(char => {
                if (!platform.characters.includes(char)) {
                    platform.characters.push(char)
                }
            });
        }

        const platformsUpdated = await platform.save();
        return res.status(200).json(platformsUpdated);
    } catch (error) {
        return res.status(400).json({error: "error updating"});
    }
}


const deletePlatform = async (req, res, next) => {
    try {
       const {id} = req.params;
       const platformsDeleted = await Platforms.findByIdAndDelete(id);
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

