const router = require("express").Router();
const Sequelize = require("sequelize");
const { Sighting, Fruit, Location } = require("../models");

//Get the 10 most recent sightings and a random fruit to display on the homepage.
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
    var fruitOfTheDay;
    if (
      !req.session.fruitOfTheDayOptions ||
      (req.session.fruitOfTheDayOptions &&
        req.session.fruitOfTheDayOptions.dateSelected + (60 * 60 * 1000 * 24) >
          Date.now())
    ) {
      const fruitData = await Fruit.findAll({
        order: [Sequelize.fn("RAND")],
        limit: 1,
      });
      fruitOfTheDay = fruitData[0].get({ plain: true });
      req.session.fruitOfTheDayOptions.fruit = fruitOfTheDay;
      req.session.fruitOfTheDayOptions.dateSelected = Date.now();
    } else {
      fruitOfTheDay = req.session.fruitOfTheDayOptions.fruit;
    }

    res.json({
      fruitDatafruitOfTheDay,
      sightings,
      loggedIn: req.session.loggedIn,
    }); //REMOVE AFTER TESTING
    //res.render("homepage", { sightings, fruitOfTheDay }); //homepage to display message if there is no sightning data
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

module.exports = router;
