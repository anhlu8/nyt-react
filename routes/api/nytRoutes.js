const router = require("express").Router();
const nytController = require("../../controllers/nytController.js");


router.route("/")
  .get(nytController.findArticles)

module.exports = router;

