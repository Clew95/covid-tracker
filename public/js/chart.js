let totaleCasi = document.getElementById('totaleCasi').getContext('2d'),
	totalePositivi = document.getElementById('totalePositivi').getContext('2d'),
	nuoviPositivi = document.getElementById('nuoviPositivi').getContext('2d'),
	tamponi = document.getElementById('chartTamponi').getContext('2d'),
	nuoviPositiviSettimanale = document.getElementById('nuoviPositivi--settimanale').getContext('2d');

Chart.defaults.scale.gridLines.drawOnChartArea = false;
Chart.defaults.animation = true;
Chart.defaults.global.animation.duration = 5000;
Chart.defaults.global.legend.display = false;

const CHART_NORESP = {
	responsive          : true,
	maintainAspectRatio : false
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
	options : CHART_NORESP
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
	options : CHART_NORESP
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
	options : CHART_NORESP
});

let chartTamponi = new Chart(tamponi, {
	type    : 'bar',
	data    : {
		labels   : covidData['tamponi'],
		datasets : [
			{
				label           : 'Tamponi',
				data            : covidData['tamponi'],
				backgroundColor : '#888',
				borderColor     : '#777'
			}
		]
	},
	options : CHART_NORESP
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
	options : CHART_NORESP
});
