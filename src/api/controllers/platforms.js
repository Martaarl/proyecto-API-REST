const Platforms = require("../models/platforms");

Platforms

const getPlatform = async (req, res, next) => {
    try {
        const platforms = await Platforms.find().populate("movies");
        return res.status(200).json(platforms);
    } catch (error) {
        return res.status(400).json({error: error.message});
        };
    
}

const getPlatformById = async (req, res, next) => {
    try {
       const { id } = req.params;
       const platforms = await Platforms.findById(id).populate("movies");

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
        const allPlatforms = await Platforms.findById(id);

        if (!allPlatforms) {
            return res.status(400).json({error: "Platform not found"})
        }
        
        let newPlatforms = new Platforms(req.body);
        newPlatforms = {
            _id: id,
            name: req.body.name || allPlatforms.name,
            image: req.body.image || allPlatforms.image, 
            movies: [...allPlatforms.movies]
        }

        if(req.body.movies && Array.isArray(req.body.movies)){
        newPlatforms.movies = [...allPlatforms.movies, ...req.body.movies];
        }

        const platformsUpdated = await Platforms.findByIdAndUpdate(id, newPlatforms, {
            new: true,
        });
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

