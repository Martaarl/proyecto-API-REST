const express = require("express");
const { getPlatform, getPlatformById, putPlatform, postPlatform, deletePlatform } = require("../controllers/platforms");

getPlatform
getPlatformById
putPlatform
postPlatform
deletePlatform

const platformsRouter = express.Router();

platformsRouter.get("/:id", getPlatformById);
platformsRouter.get("/", getPlatform);
platformsRouter.post("/", postPlatform);
platformsRouter.put("/:id", putPlatform);
platformsRouter.delete("/:id", deletePlatform);


module.exports = platformsRouter;