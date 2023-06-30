const router = require("express").Router();

const userRoutes = require("./profile-routes");
const sightingRoutes = require("./sighting-routes");

router.use("/profile", userRoutes);
router.use("/sighting", sightingRoutes);

module.exports = router;
