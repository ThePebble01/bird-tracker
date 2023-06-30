const router = require("express").Router();
const { Sighting, Fruit, Location } = require("../models"); //PLACEHOLDER MODEL NAMES

router.get("/", async (req, res) => {
  try {
    const sightingData = await Sighting.findAll({
      limit: 10,
      order: [["createdAt", "DESC"]],
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

    const fruitData = await Fruit.findAll(req.params.id, {
      order: [Sequelize.fn("RAND")], //https://github.com/sequelize/sequelize/issues/3156
      include: [
        {
          model: Sighting,
          attributes: ["fruit_id", "location_id"], // CONFIRM COLUMN NAMES
        },
        {
          model: Location,
          attributes: ["name", "city", "state"], // CONFIRM HOW NESTED JOINS WOULD WORK IN SEQUELIZE
        },
      ],
    });
    const randomFruit = fruitData.get({ plain: true });
    res.render("homepage", { sightings, randomFruit }); //homepage to display message if there is no sightning data
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get an individual sighting
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
    res.render("sighting", { sighting });
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
