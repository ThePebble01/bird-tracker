const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class sightings extends Model {}

sightings.init(
  {
    profile_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'profile',
          key: 'id',
        },
    },
    fruit: {
      type: DataTypes.STRING,
      references: {
        model: 'fruit',
        key: 'name',
      },
    },
    location: {
      type: DataTypes.STRING,
      references: {
        model: 'location',
        key: 'name',
      },
    },
    date_time: {
      type: DataTypes.DATETIME,
      allowNull: false,
    },
  },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "sightings",
  }
);

module.exports = sightings;
