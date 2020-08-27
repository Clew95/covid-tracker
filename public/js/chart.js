let totaleCasi = document.getElementById('totaleCasi').getContext('2d'),
	nuoviPositivi = document.getElementById('nuoviPositivi').getContext('2d'),
	nuoviPositiviSettimanale = document.getElementById('nuoviPositivi--settimanale').getContext('2d'),
	totalePositivi = document.getElementById('totalePositivi').getContext('2d');

let chartTotaleCasi = new Chart(totaleCasi, {
	type : 'line',
	data : {
		labels   : covidData['data'],
		datasets : [
			{
				label           : 'Casi Totali',
				data            : covidData['totale_casi'],
				backgroundColor : '#fda2aa9a',
				borderColor     : '#fc747f'
			}
		]
	}
});

let chartTotalePositivi = new Chart(totalePositivi, {
	type : 'bar',
	data : {
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
	}
});

let chartNuoviPositivi = new Chart(nuoviPositivi, {
	type : 'bar',
	data : {
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
	}
});

let chartNuoviPositiviSettimanale = new Chart(nuoviPositiviSettimanale, {
	type : 'bar',
	data : {
		labels   : weeklyData['data'],
		datasets : [
			{
				label           : 'Nuovi Positivi - Settimanale',
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
	}
});
