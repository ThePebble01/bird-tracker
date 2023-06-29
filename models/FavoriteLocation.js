const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FavoriteLocation extends Model {}

FavoriteLocation.init(
  {
    profile_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'profile',
          key: 'id',
        },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      },
    },
  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favoriteLocation",
  }
);

module.exports = FavoriteLocation;
