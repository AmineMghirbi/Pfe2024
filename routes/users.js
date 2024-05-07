const express = require('express');
const router = express.Router();
const { user } = require("../database/db.js");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const data = await user.findAll();
  res.send(data);
});

module.exports = router;
