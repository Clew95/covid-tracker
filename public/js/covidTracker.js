const root = document.querySelector('#root');
const main = document.querySelector('.main');

const sidebar = document.querySelector('.sidebar');
const hamburgerInput = document.querySelector('.hamburger__input');

const chartsSection = document.querySelector('.charts');

hamburgerInput.addEventListener('click', sidebarToggler);

// ************************************************************* //

/*
 * FUNCTIONS 
 */

// ====================
// sidebarToggler
// ====================
/**
 * Function to toggle sidebar. On hambruger click, it remove a class called 'sidebar--hide' that hide the sidebar.
 * Instead, to the main element, is removed a class called "main--full" to guve space to sidebar.
 */

function sidebarToggler() {
	if (sidebar.classList.contains('sidebar--hide') && main.classList.contains('main--full')) {
		sidebar.classList.remove('sidebar--hide');
		main.classList.remove('main--full');
	}
	else {
		sidebar.classList.add('sidebar--hide');
		main.classList.add('main--full');
	}
}

// ************************************************************* //
