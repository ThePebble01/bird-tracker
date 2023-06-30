const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sighting extends Model {}

Sighting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "profile",
        key: "id",
      },
    },
    fruit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "fruit",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "sighting",
  }
);

module.exports = Sighting;
