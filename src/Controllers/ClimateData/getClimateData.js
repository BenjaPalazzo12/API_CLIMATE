const { ClimateData } = require("../../DataBase");

const getClimateData = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
