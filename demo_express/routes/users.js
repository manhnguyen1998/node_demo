var express = require('express');
const bodyParse = require('body-parser');
var User = require('../models/user');

var router = express.Router();
router.use(bodyParse.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
