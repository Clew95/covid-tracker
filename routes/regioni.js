const express = require('express'),
	axios = require('axios').default,
	router = express.Router();

router.get('/', (req, res) => {
	axios
		.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json')
		.then((response) => {
			const DATA_BUNCH = response.data;
			res.render('regioni', { baseUrl: req.baseUrl, data: DATA_BUNCH });
		});
});

router.get('/:regione', (req, res) => {
	res.render('working', { baseUrl: req.baseUrl });

	/*	axios
		.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json')
		.then((response) => {
			const DATA_BUNCH = response.data.filter(function(e) {
				return e.denominazione_regione.toLowerCase() === req.params.regione;
			});

			res.render('regionDetails', { baseUrl: req.baseUrl, data: DATA_BUNCH });
		});*/
});
module.exports = router;
