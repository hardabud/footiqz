function finLevel(route) {
	document.querySelector('p')
		.textContent = 'fin level ' + (route.params.level || '')
}
