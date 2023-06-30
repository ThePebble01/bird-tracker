const { FavoriteFruit } = require("../models");

const seedFavoriteFruit = async () => {
  const favoriteFruitData = [
    {
      fruit_id: 1,
      profile_id: 1,
    },
    {
      fruit_id: 10,
      profile_id: 1,
    },
    {
      fruit_id: 22,
      profile_id: 1,
    },
    {
      fruit_id: 33,
      profile_id: 2,
    },
    {
      fruit_id: 9,
      profile_id: 2,
    },
    {
      fruit_id: 2,
      profile_id: 2,
    },
  ];
  await FavoriteFruit.bulkCreate(favoriteFruitData);
};
module.exports = seedFavoriteFruit;
