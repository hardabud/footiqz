function gameover() {
	$('#content').empty();

	scoreTableView();

	$('#content').append('<p>Game over. Your Score:' + finalScore + '</p>');

	$.getJSON('http://www.hardabud.com/foot/api/score/getMin.php', function(json) {
		var last = json.min;
		if(finalScore > last) {
			$('#content').append(
				'<h1>You made it into top 10</h1>' +
				'<p>Save your score</p>' +
				'<input id="nameInput" type="text" placeholder="enter your name">' +
				'<button id="nameSave">Save</button>'
			);
			$('#nameSave').on('click', function() {
				var nom = $('#nameInput').val();
				if(nom == undefined) { 
					$('#content').append('<p>Don\'t be shy. Enter your name</p>');
				} else {
					$.getJSON('http://www.hardabud.com/foot/api/score/write.php?name=' + nom + '&score=' + finalScore, function(json) {
						console.log(json)
						page('/rank');
					})
				}
			});
		} else {
			$('#content').append(
				'<a onclick="resetScore()" href="./1/1"><button>Play again</button></a>' +
				'<a onclick="resetScore()" href="./rank"><button>See ranking</button></a>'
			);
		}
	})



		

}
