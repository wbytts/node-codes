var express = require('express');
let ldb = require('../utils/lowdb-util')

var router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello World');
});

router.get('/users', (req, res) => {
  let users = ldb.get('users')
  res.send(users);
})


module.exports = router;
