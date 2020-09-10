const e = require('express');

const express = require('express'),
	axios = require('axios').default,
	router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	const getDataArray = (dataArray, denArray, attribute) => {
		dataArray.forEach((element) => {
			if (element['denominazione_regione'].includes('P.A.')) {
				element['denominazione_regione'] = 'P.A. Trento e Bolzano';
				denArray.push(element[attribute]);
			}
			else {
				denArray.push(element[attribute]);
			}
		});
	};

	function removeDuplicates(array) {
		array.splice(0, array.length, ...new Set(array));
	}

	axios
		.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')
		.then((response) => {
			const DATA_BUNCH = response.data;
			let REGION_DEN = new Array();
			let PROVINCE_DEN = new Array();
			let REGION_CODE = new Array();

			getDataArray(DATA_BUNCH, REGION_DEN, 'denominazione_regione');
			getDataArray(DATA_BUNCH, PROVINCE_DEN, 'denominazione_provincia');
			getDataArray(DATA_BUNCH, REGION_CODE, 'codice_regione');

			removeDuplicates(REGION_DEN);
			removeDuplicates(PROVINCE_DEN);
			removeDuplicates(REGION_CODE);

			const DATA_SETTINGS = {
				isARegion   : false,
				isAProvince : false
			};

			res.render('landing', {
				baseUrl     : req.baseUrl,
				data        : DATA_BUNCH,
				regionDen   : REGION_DEN,
				provinceDen : PROVINCE_DEN,
				regionCode  : REGION_CODE,
				settings    : DATA_SETTINGS,
				isARegion   : DATA_SETTINGS.isARegion,
				isAProvince : DATA_SETTINGS.isAProvince
			});
		});
});

module.exports = router;
