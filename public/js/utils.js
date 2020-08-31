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

dataManager.generateDailyBuffer = function(buffers) {
	let dailyBuffers = [];
	let tmp_value = 0;
	buffers.forEach((el) => {
		dailyBuffers.push(el - tmp_value);
		tmp_value = el; //tmp_value = 4324
	});

	return dailyBuffers;
};

dataManager.percBuffersPositives = function(buffers, positive) {
	let percArray = [];

	for (let idx = 0; idx < buffers.length; idx++) {
		percArray.push(parseFloat((positive[idx] * 100 / buffers[idx]).toFixed(3)));
	}
	return percArray;
};

dataManager.createDataElem = function(DOMelement, dataArray, dates) {
	for (let idx = 0; idx < dates.length; idx++) {
		let tmp_string = `${dates[idx]}: ${dataArray[idx]}`;
		let tmp_span = document.createElement('span');
		tmp_span.className = `charts__item`;

		tmp_span.innerHTML = `${tmp_string}</>`;

		DOMelement.appendChild(tmp_span);
	}
};

dataManager.numberWithCommas = function(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
