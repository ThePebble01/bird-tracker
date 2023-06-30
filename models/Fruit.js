const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Fruit extends Model {}

Fruit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    family: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
    fat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
    sugar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
    carbohydrates: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
    protein: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "fruit",
  }
);

module.exports = Fruit;
