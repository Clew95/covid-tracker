const express = require('express'),
	axios = require('axios').default,
	router = express.Router();

router.get('/', (req, res) => {
	axios
		.get(
			'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json'
		)
		.then((response) => {
			const DATA_BUNCH = response.data;
			const TODAY = DATA_BUNCH.length - 1;
			console.log(DATA_BUNCH)
			const DATA_SETTINGS = {
				incremento_nuovi_positivi       :
					parseInt(DATA_BUNCH[TODAY]['nuovi_positivi']) - parseInt(DATA_BUNCH[TODAY - 1]['nuovi_positivi']) >
					0
						? true
						: false,
				incremento_attualmente_positivi :
					parseInt(DATA_BUNCH[TODAY]['variazione_totale_positivi']) > 0 ? true : false,
				incremento_terapia_intensiva    :
					parseInt(DATA_BUNCH[TODAY]['terapia_intensiva']) - parseInt(DATA_BUNCH[TODAY - 1]['terapia_intensiva']) > 0
						? true
						: false,
				isARegion : false

			};

			res.render('covid', {
				baseUrl   : req.baseUrl,
				data      : DATA_BUNCH,
				settings  : DATA_SETTINGS,
				isARegion : DATA_SETTINGS.isARegion
			});
		});
});

module.exports = router;
