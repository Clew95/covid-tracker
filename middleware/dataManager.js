let dataManager = {};

//This is a funciton to covert
dataManager.numberWithCommas = function(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
};

dataManager.isANumber = function(x) {
	return !isNaN(x);
};

module.exports = dataManager;
