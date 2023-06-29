const Profile = require("./Profile");
const Location = require("./Location");
const Fruit = require("./Fruit");
const Sighting = require("./Sighting");
const FavoriteFruit = require("./FavoriteFruit");

Sighting.belongsTo(Fruit, {
  foreignKey: "fruit_id",
});
Fruit.hasMany(Sighting, {
  foreignKey: "fruit_id",
});
Sighting.belongsTo(Location, {
  foreignKey: "location_id",
});
Fruit.hasMany(Location, {
  foreignKey: "location_id",
});
Sighting.belongsTo(Profile, {
  foreignKey: "profile_id",
});
Fruit.hasMany(Profile, {
  foreignKey: "profile_id",
});

FavoriteFruit.belongsTo(Fruit, {
  foreignKey: "fruit_id",
});
Fruit.hasMany(FavoriteFruit, {
  foreignKey: "fruit_id",
});

FavoriteFruit.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.hasMany(FavoriteFruit, {
  foreignKey: "location_id",
});

FavoriteFruit.module.exports = { Profile, Location, Fruit };
