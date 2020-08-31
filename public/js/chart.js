let totaleCasi = document.getElementById('totaleCasi').getContext('2d'),
	totalePositivi = document.getElementById('totalePositivi').getContext('2d'),
	percTamponiPositivi = document.getElementById('percTamponiPositivi').getContext('2d'),
	nuoviPositivi = document.getElementById('nuoviPositivi').getContext('2d'),
	tamponi = document.getElementById('chartTamponi').getContext('2d'),
	nuoviPositiviSettimanale = document.getElementById('nuoviPositivi--settimanale').getContext('2d'),
	tamponiSettimanale = document.getElementById('chartTamponi--settimanale').getContext('2d');

Chart.defaults.animation = true;
Chart.defaults.global.animation.duration = 5000;
Chart.defaults.global.legend.display = false;

const CHART_OPTIONS = {
	responsive          : true,
	maintainAspectRatio : false,
	elements            : {
		line : {
			tension : 0.75
		}
	},

	scales              : {
		xAxes : [
			{
				gridLines : {
					display    : false,
					drawBorder : false
				}
			}
		],
		yAxes : [
			{
				ticks : {
					callback : function(value) {
						return numeral(value).format('0,0');
					}
				}
			}
		]
	}
};

let chartTotaleCasi = new Chart(totaleCasi, {
	type    : 'line',
	data    : {
		labels   : covidData['data'],
		datasets : [
			{
				label           : 'Casi Totali',
				data            : covidData['totale_casi'],
				backgroundColor : '#fda2aa9a',
				borderColor     : '#fc747f'
			}
		]
	},
	options : CHART_OPTIONS
});

let chartTotalePositivi = new Chart(totalePositivi, {
	type    : 'bar',
	data    : {
		labels   : covidData['data'],
		datasets : [
			{
				label           : 'Casi Attivi',
				data            : covidData['totale_positivi'],
				backgroundColor : function(context) {
					let index = context.dataIndex;
					let value = context.dataset.data[index];
					return value < 15000 ? '#07c180aa' : value < 30000 ? '#ff9931aa' : '#e65651aa';
				},
				borderColor     : function(context) {
					let index = context.dataIndex;
					let value = context.dataset.data[index];
					return value < 15000 ? '#07c180aa' : value < 30000 ? '#ff9931aa' : '#e65651aa';
				}
			}
		]
	},
	options : CHART_OPTIONS
});

let chartNuoviPositivi = new Chart(nuoviPositivi, {
	type    : 'bar',
	data    : {
		labels   : covidData['data'],
		datasets : [
			{
				label           : 'Nuovi Positivi',
				data            : covidData['nuovi_positivi'],
				backgroundColor : function(context) {
					let index = context.dataIndex;
					let value = context.dataset.data[index];
					return value < 500 ? '#07c180aa' : value < 1500 ? '#ff9931aa' : '#e65651aa';
				},
				borderColor     : function(context) {
					let index = context.dataIndex;
					let value = context.dataset.data[index];
					return value < 500 ? '#07c180aa' : value < 1500 ? '#ff9931aa' : '#e65651aa';
				}
			}
		]
	},
	options : CHART_OPTIONS
});

let chartPercTamponiPositivi = new Chart(percTamponiPositivi, {
	type    : 'bar',
	data    : {
		labels   : covidData['data'],
		datasets : [
			{
				label           : 'Percentuale Tamponi/Positivi',
				data            : covidData['tamponi_perc_positivi'],
				backgroundColor : function(context) {
					let index = context.dataIndex;
					let value = context.dataset.data[index];
					return value < 2.5 ? '#07c180aa' : value < 10 ? '#ff9931aa' : '#e65651aa';
				},
				borderColor     : function(context) {
					let index = context.dataIndex;
					let value = context.dataset.data[index];
					return value < 2.5 ? '#07c180aa' : value < 10 ? '#ff9931aa' : '#e65651aa';
				}
			}
		]
	},
	options : CHART_OPTIONS
});

let chartTamponi = new Chart(tamponi, {
	type    : 'bar',
	data    : {
		labels   : covidData['data'],
		datasets : [
			{
				label           : 'Tamponi',
				data            : covidData['tamponi_nuovi'],
				backgroundColor : '#1d355799',
				borderColor     : '#eaeaea'
			}
		]
	},
	options : CHART_OPTIONS
});

let chartNuoviPositiviSettimanale = new Chart(nuoviPositiviSettimanale, {
	type    : 'bar',
	data    : {
		labels   : weeklyData['data'],
		datasets : [
			{
				label           : 'Nuovi Positivi',
				data            : weeklyData['nuovi_positivi'],
				backgroundColor : function(context) {
					let index = context.dataIndex;
					let value = context.dataset.data[index];
					return value < 5000 ? '#07c180aa' : value < 15000 ? '#ff9931aa' : '#e65651aa';
				},
				borderColor     : function(context) {
					let index = context.dataIndex;
					let value = context.dataset.data[index];
					return value < 5000 ? '#07c180aa' : value < 15000 ? '#ff9931aa' : '#e65651aa';
				}
			}
		]
	},
	options : CHART_OPTIONS
});

let chartTamponiSettimanale = new Chart(tamponiSettimanale, {
	type    : 'bar',
	data    : {
		labels   : weeklyData['data'],
		datasets : [
			{
				label           : 'Tamponi',
				data            : weeklyData['tamponi_nuovi'],
				backgroundColor : '#1d355799',
				borderColor     : '#eaeaea'
			}
		]
	},
	options : CHART_OPTIONS
});
