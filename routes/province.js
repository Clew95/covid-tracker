const express = require('express'),
	axios = require('axios').default,
	router = express.Router();

router.get('/', (req, res) => {
	axios
		.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')
		.then((response) => {
			const DATA_BUNCH = response.data;
			res.render('province', { baseUrl: req.baseUrl, data: DATA_BUNCH, isARegion: false, isAProvince: true });
		})
		.catch((err) => {
			res.send(err);
		});
});

router.get('/:provincia', (req, res) => {
	axios
		.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json')
		.then((response) => {
			const DATA_BUNCH = response.data.filter(function(e) {
				return parseInt(e.codice_provincia) === parseInt(req.params.provincia);
			});
			res.render('provinceDetails', {
				baseUrl: req.baseUrl,
				data: DATA_BUNCH,
				isARegion: false,
				isAProvince: true
			});
		})
		.catch((err) => {
			res.send(err);
		});
});

module.exports = router;
