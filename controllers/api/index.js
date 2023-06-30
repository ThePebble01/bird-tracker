const router = require("express").Router();

const userRoutes = require("./profile-routes");
const sightingRoutes = require("./sighting-routes");
const fruitRoutes = require("./fruit-routes");

router.use("/profile", userRoutes);
router.use("/sighting", sightingRoutes);
router.use("/fruit", fruitRoutes);
module.exports = router;
