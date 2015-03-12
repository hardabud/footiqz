function hintsView(hints) {

	$('#content').append(
		'<br/>' +
		'<h1>Hints</h1>' +
		'<div id="hints"></div>' +
		'<br/>'			
	);

	var rndm = getRandom(hints, 3);
	renderHint(rndm[0],1);
	renderHint(rndm[1],2);
	renderHint(rndm[2],3);

	$('#hints').append(
		'<button id="btnHint1">See first hint</button>' +
		'<button id="btnHint2" style="display:none">See second hint</button>' +
		'<button id="btnHint3" style="display:none">See third hint</button>' 
	);

	$('#btnHint1').on('click', function() {
			useHint();
			$('#btnHint1').remove();
			$('span#hint1').show().append('<hr/>'); 
			$('#btnHint2').show();
	});
	$('#btnHint2').on('click', function() {
			useHint();
			$('#btnHint2').remove();
			$('span#hint2').show().append('<hr/>'); 
			$('#btnHint3').show();
	});
	$('#btnHint3').on('click', function() {
			useHint();
			$('#btnHint3').remove();
			$('span#hint3').show();
	});

	function renderHint(hint,hintNb) {
		var id = hint.hintId;
		if(id == 1) {
			$('#hints').append(
				'<span id="hint' + hintNb + '" style="display:none">' +
					'<b>Hint nr. ' + hintNb + ' - ' +
					'Born: </b>' + hint.birth.date.substring(0,10) + ' in ' + hint.birth.place + '<br/>' +
				'</span>' 
			);
		} else if (id == 2) {
			$('#hints').append(
				'<span id="hint' + hintNb + '" style="display:none">' +
					'<b>Hint nr. ' + hintNb + ' - ' +
					'Position: </b>' + hint.position + '<br/>' +
				'</span>' 
			);
		} else if (id == 3) {
			$('#hints').append(
				'<span id="hint' + hintNb + '" style="display:none">' +
					'<b>Hint nr. ' + hintNb + ' - ' +
					'Height: </b>' + hint.height + '<br/>' + 
				'</span>' 
			);
		} else if (id == 4) {
			$('#hints').append(
				'<span id="hint' + hintNb + '" style="display:none">' +
				'<b>Hint nr. ' + hintNb + ' - ' +
					'National teams: </b>' + 	
					'<table id="natTable">' +
					'</table>' + 
				'</span>' 
			);

			for(i=0;i<hint.natcareer.length;i++) {
				$('#natTable').append(
					'<tr>' +
						'<td>' + hint.natcareer[i].years + '</td>' +
						'<td>' + hint.natcareer[i].club + '</td>' +	
					'</tr>'		
				);
			}

		}
	}
	
}
