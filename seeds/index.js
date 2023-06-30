const sequelize = require("../config/connection");
const seedProfile = require("./profileData");
const seedFruit = require("./fruitData");
const seedFavoriteFruit = require("./favoriteFruitData");
const seedLocation = require("./locationData");
const seedFavoriteLocation = require("./favoriteLocationData");
const seedSighting = require("./sightingData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedProfile();
  await seedFruit();
  await seedFavoriteFruit();
  await seedLocation();
  await seedFavoriteLocation();
  await seedSighting();
  process.exit(0);
};

seedAll();
