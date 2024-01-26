require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER } = process.env;
const CityModel = require("./Models/City");
const ClimateDataModel = require("./Models/ClimateData");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

  {
    logging: false,
  }
);

CityModel(sequelize);
ClimateDataModel(sequelize);

const { City, ClimateData } = sequelize.models;

ClimateData.belongsTo(City, { foreignKey: "CityId" });
City.hasOne(ClimateData, { foreignKey: "CityId" });

module.exports = {
  ...sequelize.models,
  connect: sequelize,
};
