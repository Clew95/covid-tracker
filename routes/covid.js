const express = require('express'),
	router = express.Router();

router.get('/', (req, res) => {
	res.render('covid', { baseUrl: req.baseUrl });
});

module.exports = router;
