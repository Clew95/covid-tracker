var ctx = document.getElementById('sampleChart').getContext('2d');
var myChart = new Chart(ctx, {
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
