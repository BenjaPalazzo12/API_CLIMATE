const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const postCities = require("./Routes/CitiesRoutes/postCities.routes");
const getCitiesByName = require("./Routes/CitiesRoutes/getCitiesByName.routes");

const postClimateData = require("./Routes/ClimateDataRoutes/postClimateData.routes");

app.use("/", postCities);
app.use("/", getCitiesByName);

app.use("/", postClimateData);

module.exports = app;
