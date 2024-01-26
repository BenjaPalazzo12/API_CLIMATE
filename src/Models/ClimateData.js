const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "ClimateData",
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      Temperature: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },

      Humidity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },

      DescriptionTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
    
  );
};
