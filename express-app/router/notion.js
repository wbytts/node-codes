var express = require('express');
var { notion } = require('../utils/notion');
var router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
