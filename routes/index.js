var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('landing', { title: 'Covid Tracker', subtitle: 'Check if the risk is high or not' });
});

module.exports = router;
