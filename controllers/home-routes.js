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

    const sightings = sightingData.map((sighting) =>
      sighting.get({ plain: true })
    );
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
    //homepage to display message if there is no sightning data
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

    res.render("profile", { profile });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
