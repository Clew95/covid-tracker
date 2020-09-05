const express = require('express'),
	axios = require('axios').default,
	router = express.Router();

router.get('/', (req, res) => {
	axios
		.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
		.then((response) => {
			const DATA_BUNCH = response.data;

			res.render('regioni', { baseUrl: req.baseUrl, data: DATA_BUNCH });
		});
});

module.exports = router;
