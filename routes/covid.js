const { response } = require('express');

const express = require('express'),
	axios = require('axios').default,
	router = express.Router();

const dataManager = require('../middleware/dataManager');

router.get('/', (req, res) => {
	axios
		.get(
			'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json'
		)
		.then((response) => {
			const DATA_BUNCH = response.data[0];

			for (let key in DATA_BUNCH) {
				if (dataManager.isANumber(DATA_BUNCH[key])) {
					DATA_BUNCH[key] = dataManager.numberWithCommas(DATA_BUNCH[key]);
				}
			}

			res.render('covid', { baseUrl: req.baseUrl, data: DATA_BUNCH });
		});
});

module.exports = router;
