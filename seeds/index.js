const sequelize = require("../config/connection");
const seedProfile = require("./profileData");
const seedFruit = require("./fruitData");
const seedFavoriteFruit = require("./favoriteFruitData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedProfile();
  await seedFruit();
  await seedFavoriteFruit();
  process.exit(0);
};

seedAll();
