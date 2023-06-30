const { FavoriteLocation } = require("../models");

const seedFavoriteLocation = async () => {
  const favoriteLocationData = [
    {
      location_id: 1,
      profile_id: 1,
    },
    {
      location_id: 2,
      profile_id: 1,
    },
    {
      location_id: 3,
      profile_id: 2,
    },
    {
      location_id: 1,
      profile_id: 2,
    },
  ];
  await FavoriteLocation.bulkCreate(favoriteLocationData);
};
module.exports = seedFavoriteLocation;
