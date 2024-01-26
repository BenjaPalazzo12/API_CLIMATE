const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define("City", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
