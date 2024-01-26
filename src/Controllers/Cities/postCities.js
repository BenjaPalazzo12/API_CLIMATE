const { City } = require("../../DataBase");
const ArrayCity = require("../../ArrayCity");
const postCity = async (req, res) => {
  try {
    const count = await City.count();
    console.log(count);
    if (count === 0) {
      City.bulkCreate(ArrayCity);
      return res.status(200).json({
        message: "Paises cargados con éxito",
      });
    } else {
      return res.status(404).json("Algo salio mal");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCity;
