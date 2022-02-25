var express = require('express');
var router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello World');
});

router.get('/1', (req, res) => {
  res.render('demo/ejs-1', { msg: 'Hello World' });
});

router.get('/2', (req, res) => {

});

module.exports = router;
