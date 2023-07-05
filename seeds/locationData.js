const { Location } = require("../models");

const seedLocation = async () => {
  const locationData = [
    {
      name: "Albertson's",
      city: "Denver",
      state: "Colorado",
    },
    {
      name: "James' Fruit Tree Out Back",
      city: "Golden",
      state: "Kentucky",
    },
    {
      name: "King Soopers",
      city: "Brighton",
      state: "Colorado",
    },
    {
      name: "Shady Sam",
      city: "Denver",
      state: "Colorado",
    },
    {
      name: "Big Tree, NW Side of Ferril Lake In City Park",
      city: "Denver",
      state: "Colorado",
    },
    {
      name: "That One Lake",
      city: "Granby",
      state: "Colorado",
    },
  ];
  await Location.bulkCreate(locationData);
};
module.exports = seedLocation;
