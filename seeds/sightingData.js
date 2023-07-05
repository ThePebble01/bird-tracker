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
      profile_id: 1,
      fruit_id: 9,
    },
    {
      location_id: 1,
      profile_id: 1,
      fruit_id: 5,
    },
    {
      location_id: 1,
      profile_id: 1,
      fruit_id: 9,
    },
    {
      location_id: 1,
      profile_id: 1,
      fruit_id: 15,
    },
    {
      location_id: 1,
      profile_id: 2,
      fruit_id: 12,
    },
    {
      location_id: 1,
      profile_id: 2,
      fruit_id: 10,
    },
    {
      location_id: 4,
      profile_id: 2,
      fruit_id: 9,
    },
    {
      location_id: 5,
      profile_id: 3,
      fruit_id: 5,
    },
    {
      location_id: 1,
      profile_id: 3,
      fruit_id: 10,
    },
    {
      location_id: 1,
      profile_id: 3,
      fruit_id: 9,
    },
    {
      location_id: 1,
      profile_id: 3,
      fruit_id: 7,
    },
    {
      location_id: 1,
      profile_id: 3,
      fruit_id: 10,
    },
    {
      location_id: 1,
      profile_id: 3,
      fruit_id: 19,
    },
    {
      location_id: 1,
      profile_id: 3,
      fruit_id: 17,
    },
  ];
  await Sighting.bulkCreate(sightingData);
};
module.exports = seedSighting;
