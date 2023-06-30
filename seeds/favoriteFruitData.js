const { FavoriteFruit } = require("../models");

const seedFavoriteFruit = () => {
  const favoriteFruitData = [
    {
      fruit_id: 1,
      profilie_id: 1,
    },
    {
      fruit_id: 10,
      profilie_id: 1,
    },
    {
      fruit_id: 22,
      profilie_id: 1,
    },
    {
      fruit_id: 33,
      profilie_id: 2,
    },
    {
      fruit_id: 9,
      profilie_id: 2,
    },
    {
      fruit_id: 2,
      profilie_id: 2,
    },
  ];
  FavoriteFruit.bulkCreate(favoriteFruitData);
};
module.exports = seedFavoriteFruit;
