const root = document.querySelector('#root');
const main = document.querySelector('.main');

const sidebar = document.querySelector('.sidebar');
const hamburgerInput = document.querySelector('.hamburger__input');

hamburgerInput.addEventListener('click', (e) => {
	if (sidebar.classList.contains('sidebar--hide') && main.classList.contains('main--full')) {
		sidebar.classList.remove('sidebar--hide');
		main.classList.remove('main--full');
	}
	else {
		sidebar.classList.add('sidebar--hide');
		main.classList.add('main--full');
	}
});
