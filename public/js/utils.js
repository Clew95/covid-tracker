let dataManager = {};

//This is a funciton to covert
dataManager.numberWithCommas = function(value) {
	return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
};

dataManager.isANumber = function(value) {
	return !isNaN(value);
};

dataManager.dateConverter = function(date) {
	const monthName = [ 'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic' ];

	const dateSplitted = date.split('-');
	year = parseInt(dateSplitted[0]);
	month = parseInt(dateSplitted[1]);
	day = parseInt(dateSplitted[2].slice(0, 2));
	hr = dateSplitted[2].slice(-8);

	return day + ' ' + monthName[month - 1];
};
