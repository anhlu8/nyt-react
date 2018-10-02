const router = require("express").Router();
const articleRoutes = require("./nytRoutes.js");
const nytRoutes = require("./nytRoutes.js");


router.use("/articles", articleRoutes);
router.use("/nyt", nytRoutes);



module.exports = router;