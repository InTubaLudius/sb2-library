var express = require('express');
var router = express.Router();

var users = require('../controllers/users.js');

router.get('/', function(req, res, next) {
  users.getAllUsers(function(data) {
    return res.json(data);
  });
});

module.exports = router;
