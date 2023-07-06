const router = require("express").Router();
const Sequelize = require("sequelize");
const { Sighting, Fruit, Location, Profile } = require("../models");

//Get the 10 most recent sightings and a fruit of the day to display on the homepage.
router.get("/", async (req, res) => {
  try {
    const sightingData = await Sighting.findAll({
      limit: 10,
      order: [["created_At", "DESC"]],
      include: [
        {
          model: Fruit,
          attributes: ["name"],
        },
        {
          model: Location,
          attributes: ["name", "city", "state"],
        },
        {
          model: Profile,
          attributes: ["username"],
        },
      ],
    });
    const sightings = [];
    sightingData.forEach((dbSighting) => {
      const sighting = dbSighting.get({ plain: true });
      sightings.push({
        fruitName: sighting.fruit.name,
        timestamp: sighting.createdAt,
        locationName: sighting.location.name,
        city: sighting.location.city,
        state: sighting.location.state,
        username: sighting.profile.username,
      });
    });
    const fruitOfTheDay = await Fruit.findAll({
      limit: 1,
      where: {
        fruit_of_the_day: true,
      },
    });
    res.render("homepage", {
      sightings,
      fruitOfTheDay: fruitOfTheDay[0].get({ plain: true }),
      loggedIn: req.session.loggedIn,
    });
    //homepage to display message if there is no sighting data
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/profile", async (req, res) => {
  try {
    const profileData = await Profile.findByPk(req.session.profile_id);
    const profile = profileData.get({ plain: true });

    res.render("profile", { profile, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/sighting", (req, res) => {
  res.render("sighting", { loggedIn: req.session.loggedIn });
});

module.exports = router;
