const express = require("express");
const passagerController = require("../controllers/Passager");

const {body, validationResult} = require("express-validator");
const passagerRoutes = express.Router();

passagerRoutes.route("/").get(passagerController.getPassager);
passagerRoutes.post("/add",passagerController.createPassager);
passagerRoutes.patch("/:id", passagerController.updatePassager);
passagerRoutes.delete("/:id", passagerController.deletePassager);

module.exports = passagerRoutes;
