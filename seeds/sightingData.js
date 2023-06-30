const { Sighting } = require("../models");

const seedSighting = async () => {
  const sightingData = [
    {
      location_id: 1,
      profile_id: 1,
      fruit_id: 2,
    },
    {
      location_id: 2,
      profile_id: 1,
      fruit_id: 10,
    },
    {
      location_id: 3,
      profile_id: 2,
      fruit_id: 9,
    },
    {
      location_id: 1,
      profile_id: 2,
      fruit_id: 5,
    },
  ];
  await Sighting.bulkCreate(sightingData);
};
module.exports = seedSighting;
