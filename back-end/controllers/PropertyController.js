const express = require("express");
const router = express.Router();
const propertyService = require("../services/PropertyService.js");
const propertyValidation = require("../middleware/propertyValidation.js");

router.get("/types", propertyService.getPropertyTypes);

router.post("/",propertyValidation.createPropertyValidation, propertyService.createAProperty);

router.get("/", propertyService.getProperties);

router.get("/:id", propertyService.getAProperty);

router.put("/:id", propertyValidation.updatePropertyValidation, propertyService.updateAProperty);

router.delete("/:id", propertyService.deleteAProperty);

module.exports = router;