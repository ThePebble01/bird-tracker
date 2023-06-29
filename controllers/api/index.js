const router = require("express").Router();

const userRoutes = require("./profile-routes");

router.use("/profile", userRoutes);

module.exports = router;
