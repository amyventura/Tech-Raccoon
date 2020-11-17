const express = require("express");
// const commentsRoute = require("./comments");
const router = express.Router();
const jobRoute = require("./jobs-api-routes");

router.use(jobRoute);

module.exports = router;
