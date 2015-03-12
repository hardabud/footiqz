function choiceView(choice, level, next, playerId) {
	choice.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
/*
	for(i=0;i<choice.length;i++) { 
		this.id = choice[i].id;
		$('#content').append(
			'<a id ="choice' + this.id + '" href="./' + level  + '/' + next + '">' +
				'<button>' + choice[i].name + '</button>' +
			'</a>'
		);
		$('a#choice' + this.id).on('click', function () {
			if(this.id == 'choice' + playerId) {
				rightAnswer();
			} else {
				wrongAnswer();
			}
		}) 
	}
*/
	$('#content').append(
		'<h1>Choice</h1>' +
		'<select id="choiceSelect">' +
			'<option value="0">--Choose player--</option>' +
		'</select>'
	);

	for(i=0;i<choice.length;i++) { 
		this.id = choice[i].id;
		$('#choiceSelect').append(
			'<option value="' + this.id + '" href="./' + level  + '/' + next + '">' +
				choice[i].name + 
			'</option>'
		);
	}

	$('#content').append('<button id="answer">OK</button><br/><br/>')
	$('#answer').on('click', function(e) {
		var val = $('#choiceSelect').val();
		if(val != '0') {
			if(+val == playerId) { 
				rightAnswer(); 
				$('body').append('<div id="info" style="background-color:green; position: fixed; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5"></div>');
				setTimeout(function() { $('#info').remove(); }, 200)
			} else { 
				wrongAnswer(); 
				$('body').append('<div id="info" style="background-color:red; position: fixed; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.5"></div>');
				setTimeout(function() { $('#info').remove(); }, 200)
			}
			page('/' + level  + '/' + next);
		}	
	})
}
