const router = require("express").Router();
const { Sighting, Fruit, Location } = require("../../models");

//Get a user's sightings for their profile or to view other user's sightings
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
    //res.render("profile", { sightings });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  if (req.session.loggedIn) {
    // move to isAuth middleware function
    try {
      // TODO: Conceive de-duplication logic, add de-duplication logic to Location model, move Location POST to its own api route.
      const locationData = await Location.create({
        name: req.body.locationName,
        city: req.body.locationCity,
        state: req.body.locationState,
      });
      const sightingData = await Sighting.create({
        fruit_id: req.body.fruitId,
        profile_id: req.session.profile_id,
        location_id: locationData.id,
      });
      res.status(200).json({ sightingData });
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
