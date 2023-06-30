const Profile = require("./Profile");
const Location = require("./Location");
const Fruit = require("./Fruit");
const Sighting = require("./Sighting");
const FavoriteFruit = require("./FavoriteFruit");
const FavoriteLocation = require("./FavoriteLocation");

Sighting.belongsTo(Fruit, {
  foreignKey: "fruit_id",
});
Fruit.hasMany(Sighting, {
  foreignKey: "fruit_id",
});
Sighting.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(Sighting, {
  foreignKey: "location_id",
});
Sighting.belongsTo(Profile, {
  foreignKey: "profile_id",
});
Profile.hasMany(Sighting, {
  foreignKey: "profile_id",
});

Fruit.belongsToMany(Profile, { through: FavoriteFruit });
Profile.belongsToMany(Fruit, { through: FavoriteFruit });

Location.belongsToMany(Profile, { through: FavoriteLocation });
Profile.belongsToMany(Location, { through: FavoriteLocation });

module.exports = {
  Profile,
  Location,
  Fruit,
  FavoriteFruit,
  FavoriteLocation,
  Sighting,
};
