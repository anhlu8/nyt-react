const router = require("express").Router();
const articleRoutes = require("./articles");

// article routes
router.use("/articles", articleRoutes);
// key route
router.use("/key", (req, res) => {
  res.json({apiKey: process.env.NYT_API});
});

module.exports = router;