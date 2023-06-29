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
    fruit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'fruit',
        key: 'name',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
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
