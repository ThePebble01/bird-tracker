const sequelize = require("../config/connection");
const seedProfile = require("./profileData");
const seedFruit = require("./fruitData");
const seedLocation = require("./locationData");
const seedSighting = require("./sightingData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedProfile();
  await seedFruit();
  await seedLocation();
  await seedSighting();
  process.exit(0);
};

seedAll();
