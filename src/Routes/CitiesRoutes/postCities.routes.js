const router = require("express").Router();
const postCity = require("../../Controllers/Cities/postCities");

router.post("/cities", postCity);

module.exports = router;
