const express = require('express'),
	axios = require('axios').default,
	router = express.Router();

router.get('/', (req, res) => {
	axios
		.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json')
		.then((response) => {
			const DATA_BUNCH = response.data;
			res.render('regioni', { baseUrl: req.baseUrl, data: DATA_BUNCH, isARegion: false });
		});
});

router.get('/:regione', (req, res) => {
	//res.render('working', { baseUrl: req.baseUrl });

	axios
		.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json')
		.then((response) => {
			const DATA_BUNCH = response.data.filter(function(e) {
				return e.denominazione_regione.toLowerCase() === req.params.regione;
			});

			const TODAY = DATA_BUNCH.length - 1;

			const DATA_SETTINGS = {
				incremento_nuovi_positivi       :
					parseInt(DATA_BUNCH[TODAY]['nuovi_positivi']) - parseInt(DATA_BUNCH[TODAY - 1]['nuovi_positivi']) >
					0
						? true
						: false,
				incremento_attualmente_positivi :
					parseInt(DATA_BUNCH[TODAY]['variazione_totale_positivi']) > 0 ? true : false,
				incremento_terapia_intensiva    :
					parseInt(DATA_BUNCH[TODAY]['terapia_intensiva']) -
						parseInt(DATA_BUNCH[TODAY - 1]['terapia_intensiva']) >
					0
						? true
						: false,
				isARegion                       : true,
				isAProvince                     : false
			};

			res.render('regionDetails', {
				baseUrl     : req.baseUrl,
				data        : DATA_BUNCH,
				settings    : DATA_SETTINGS,
				isARegion   : DATA_SETTINGS.isARegion,
				isAProvince : DATA_SETTINGS.isAProvince
			});
		});
});
module.exports = router;
