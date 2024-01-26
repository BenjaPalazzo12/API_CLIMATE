const { City } = require("../../DataBase");

const getCitiesByName = async (req, res) => {
  try {
    const { Cities } = req.params;

    const foundCountry = await City.findOne({ where: { Name: Cities } });

    if (!foundCountry) {
      return res.status(404).json({ message: "Pais no encontrado" });
    }
    return res.status(200).json(foundCountry);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCitiesByName;
