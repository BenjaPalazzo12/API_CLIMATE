require("dotenv").config();
const axios = require("axios");
const { City, ClimateData } = require("../../DataBase");
const { API_KEY } = process.env;

const APIKEY = API_KEY;

const postClimateData = async (req, res) => {
  try {
    const { Country, CityName } = req.params;

    const foundCity = await City.findOne({
      where: { Country, Name: CityName },
    });

    if (!foundCity) {
      return res.status(404).json({ message: "Ciudad no encontrada" });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: `${CityName},${Country}`,
          appid: APIKEY,
        },
      }
    );

    const { main, weather } = response.data;

    const climateData = await ClimateData.create({
      date: new Date(),
      Temperature: main.temp,
      Humidity: main.humidity,
      DescriptionTime: weather[0].description,
      CityId: foundCity.id, // Establecer manualmente la relación
    });

    return res
      .status(201)
      .json({ message: "Datos climáticos agregados con éxito" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postClimateData;
