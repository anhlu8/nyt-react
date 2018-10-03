const router = require("express").Router();
const apiRoutes = require("./api");


module.exports = router.use("/api", apiRoutes);
