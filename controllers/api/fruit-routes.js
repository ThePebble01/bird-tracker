const router = require("express").Router();
const { Fruit } = require("../../models");

//Get Fruits To Build Picklist For Sighting Post
router.get("/", async (req, res) => {
  try {
    const fruitData = await Fruit.findAll();
    const fruits = fruitData.map((fruit) => fruit.get({ plain: true }));
    if(!fruits){
      res.status(404).json({message: "No fruits have been seeded in the database."});
    }
    res.status(200).json(fruits);
    //res.render("sighting", { sightings });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
