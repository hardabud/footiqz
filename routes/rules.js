function rules() {
	$('#content').empty();
	$('#content').append(
		'<h1>Purpose</h1>' + 
		'<p>' + 
			'Guess the player from a footballer career. ' +
			'You need 10 correct answers out of 15 to complete a level. ' + 
			'You may fail levels three times before game over. ' + 
		'</p>' +
		'<h1>Points</h1>' +
		'<p>' + 
			'Every correct answers gives you 5 points. ' +
			'Every used hint costs you 1 point. ' +
		'</p>' +
		'<a href="./1/1"><button>Play</button></a>'
	);
}
