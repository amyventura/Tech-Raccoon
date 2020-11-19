const express = require('express');
const router = express.Router();
const jobRoute = require('./api-routes');

router.use(jobRoute);

module.exports = router;
