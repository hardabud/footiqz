function rank() {
	$('#content').empty();
	$('#content').append(
		'<h1>Ranking</h1>' +
		'<table id="rankTable">' +
			'<tr class="tableHead">' +
				'<td>Position</td>' +
				'<td>Name</td>' +
				'<td>Score</td>' +
			'</tr>' +
		'</table>' +
		'<br/><br/>' +
		'<a href="./1/1"><button>Play</button></a>'
	);
	
	$.getJSON('http://www.hardabud.com/foot/api/score/view.php', function(json) {
		for(i=0;i<json.length;i++) {
			var pos = i + 1;
			$('#rankTable').append(
				'<tr>' +
					'<td>' + pos + '</td>' +
					'<td>' + json[i].name + '</td>' +
					'<td>' + json[i].score + '</td>' +
				'</tr>'
			);
		}
	})

}
