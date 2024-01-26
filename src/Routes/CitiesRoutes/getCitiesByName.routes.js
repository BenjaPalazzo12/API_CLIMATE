const router = require("express").Router();
const getCitiesByName = require("../../Controllers/Cities/getCitiesByName");

router.get("/cities/:Cities", getCitiesByName);

module.exports = router;
