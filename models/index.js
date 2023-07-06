const Profile = require("./Profile");
const Location = require("./Location");
const Fruit = require("./Fruit");
const Sighting = require("./Sighting");

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

module.exports = {
  Profile,
  Location,
  Fruit,
  Sighting,
};
