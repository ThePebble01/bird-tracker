const { Profile } = require("../models");
const bcrypt = require("bcrypt");
const testUserPass = bcrypt.hashSync("Test123", 10);
const profileData = [
  {
    username: "user1",
    email: "user1@aol.com",
    password: testUserPass,
  },
  {
    username: "user2",
    email: "user2@aol.com",
    password: testUserPass,
  },
  {
    username: "user3",
    email: "user3@aol.com",
    password: testUserPass,
  },
  {
    username: "user4",
    email: "user4@aol.com",
    password: testUserPass,
  },
];

const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile;
