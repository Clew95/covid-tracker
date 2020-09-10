let selectRegione = document.getElementById('regione');
let selectProvincia = document.getElementById('provincia');
let searchBtn = document.getElementById('searchBtn');

/**
 * Check the value of select inside formProvince
 */
const params = new URLSearchParams(window.location.search);

searchBtn.addEventListener('click', function(event) {
	event.preventDefault();
	if (this.ableToSearch) {
		const regione = selectRegione.options[selectRegione.selectedIndex].value;
		const provincia = selectProvincia.options[selectProvincia.selectedIndex].value;
		location.href = `\\province\\${provincia}`;
	}
	else {
		alert('Devi selezionare la regione e la provincia prima di proseguire\nLa funzione non è ancora disponibile');
	}
});

document.addEventListener('input', function(event) {
	// Only run on our select menu
	if (event.target.id !== 'regione' && event.target.id !== 'provincia') return;

	if (event.target.id === 'regione') {
		let fragment = document.createDocumentFragment();
		formData.forEach((el) => {
			if (
				el['codice_regione'] === parseInt(event.target.value) &&
				!el['denominazione_provincia'].includes('Fuori Regione') &&
				!el['denominazione_provincia'].includes('In fase di definizione')
			) {
				let option = document.createElement('option');
				option.setAttribute('value', el['codice_provincia']);
				option.innerHTML = el['denominazione_provincia'];
				fragment.appendChild(option);
			}
		});
		selectProvincia.innerHTML = '';
		selectProvincia.disabled = false;
		searchBtn.ableToSearch = true;
		selectProvincia.appendChild(fragment);
	}
});
