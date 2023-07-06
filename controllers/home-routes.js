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
      });
    });
    const fruitOfTheDay = await Fruit.findAll({
      limit: 1,
      where: {
        fruit_of_the_day: true,
      },
    });
    // res.json({
    //   fruitOfTheDay,
    //   sightings,
    //   loggedIn: req.session.loggedIn,
    // }); //REMOVE AFTER TESTING
    res.render("homepage", {
      sightings,
      fruitOfTheDay: fruitOfTheDay[0].get({ plain: true }),
      loggedIn: req.session.loggedIn,
    });
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
  res.render("sighting");
});

//Get an individual sighting
router.get("/sighting/:id", async (req, res) => {
  try {
    const sightingData = await Sighting.findByPk(req.params.id, {
      include: [
        {
          model: Fruit,
          attributes: ["name"],
        },
        {
          model: Location,
          attributes: ["name", "city", "state"],
        },
      ],
    });
    const sighting = sightingData.get({ plain: true });
    res.render("sighting-details", {
      fruitName: sighting.fruit.name,
      timestamp: sighting.createdAt,
      locationName: sighting.location.name,
      city: sighting.location.city,
      state: sighting.location.state,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
