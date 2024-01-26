const router = require("express").Router();
const postClimateData = require("../../Controllers/ClimateData/postClimateData");

router.post("/climate/:Country/:CityName", postClimateData);

module.exports = router;
