const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class FavoriteFruit extends Model {}

FavoriteFruit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fruit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "fruit",
        key: "id",
      },
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "profile",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favoriteFruit",
  }
);

module.exports = FavoriteFruit;
