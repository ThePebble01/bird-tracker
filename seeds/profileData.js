const { Profile } = require("../models");

const profileData = [
  {
    username: "user1",
    email: "user1@aol.com",
    password: "Test123",
  },
  {
    username: "user2",
    email: "user2@aol.com",
    password: "Test123",
  },
];

const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile;
