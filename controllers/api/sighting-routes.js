const router = require("express").Router();
const { Sighting, Fruit, Location } = require("../../models");

//Get an individual sighting
router.get("/:id", async (req, res) => {
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
    const sightings = sightingData.get({ plain: true });
    res.json(sightings);
    //res.render("sighting", { sightings });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get a user's sightings - view other user's sightings
router.get("/from/:profileId", async (req, res) => {
  try {
    const sightingData = await Sighting.findAll({
      where: {
        profile_id: req.params.profileId,
      },
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
    res.json(sightings);
    //res.render("profile", { sighting });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  if (req.session.loggedIn) {
    try {
      /*
            fruit picklist on frontend contains id?
    
            do we expose raw location fields and try to match by name, city, and state?
            do we expose a picklist for existing locations and then have raw fields under?
        */
      const sightingData = await Sighting.create({
        fruit_id: fruitId,
        profile_id: req.session.profile_id,
        location_id: locationId,
      });

      res.status(200).json({ sightingData }); //CONFIRM RESPONSE
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res
      .status(400)
      .send({ message: "You must be logged in to add a sighting!" });
  }
});

router.put("/:id", async (req, res) => {
  if (req.session.loggedIn) {
    try {
      /*
              fruit picklist on frontend contains id?
      
              do we expose raw location fields and try to match by name, city, and state?
              do we expose a picklist for existing locations and then have raw fields under?
          */
      const sightingData = await Sighting.update(
        {
          fruit_id: fruitId,
          profile_id: req.session.profile_id,
          location_id: locationId,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      res.status(200).json({ sightingData }); //CONFIRM RESPONSE
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res
      .status(400)
      .send({ message: "You must be logged in to add a sighting!" });
  }
});

module.exports = router;
