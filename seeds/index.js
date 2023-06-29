const sequelize = require("../config/connection");
const seedProfile = require("./profileData");
//const seedPaintings = require("./paintingData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProfile();

  //await seedPaintings();

  process.exit(0);
};

seedAll();
