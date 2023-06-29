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

FavoriteFruit.belongsTo(Fruit, {
  foreignKey: "fruit_id",
});
Fruit.hasMany(FavoriteFruit, {
  foreignKey: "fruit_id",
});
FavoriteFruit.belongsTo(Profile, {
  foreignKey: "profile_id",
});
Profile.hasMany(FavoriteFruit, {
  foreignKey: "profile_id",
});

FavoriteLocation.belongsTo(Profile, {
  foreignKey: "profile_id",
});
Profile.hasMany(FavoriteLocation, {
  foreignKey: "profile_id",
});
FavoriteLocation.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(FavoriteLocation, {
  foreignKey: "location_id",
});

module.exports = {
  Profile,
  Location,
  Fruit,
  FavoriteFruit,
  FavoriteLocation,
  Sighting,
};
