const express = require('express'),
	axios = require('axios').default,
	router = express.Router();

const dataManager = require('../middleware/dataManager');

router.get('/', (req, res) => {
	axios
		.get(
			'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json'
		)
		.then((response) => {
			const DATA_BUNCH = response.data;
			const TODAY = DATA_BUNCH.length - 1;
			const DATA_SETTINGS = {
				incremento_nuovi_positivi       :
					parseInt(DATA_BUNCH[TODAY]['nuovi_positivi']) - parseInt(DATA_BUNCH[TODAY - 1]['nuovi_positivi']) >
					0
						? true
						: false,
				incremento_attualmente_positivi :
					parseInt(DATA_BUNCH[TODAY]['variazione_totale_positivi']) > 0 ? true : false
			};

			for (let key in DATA_BUNCH[TODAY]) {
				if (DATA_BUNCH[TODAY][key] && dataManager.isANumber(DATA_BUNCH[TODAY][key])) {
					DATA_BUNCH[TODAY][key] = dataManager.numberWithCommas(DATA_BUNCH[TODAY][key]);
				}
			}

			res.render('covid', { baseUrl: req.baseUrl, data: DATA_BUNCH, settings: DATA_SETTINGS });
		});
});

module.exports = router;
