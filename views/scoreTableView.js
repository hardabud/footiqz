function scoreTableView() {
	$('#content').append(
		'<table id="scoreTable">' +
			'<tr class="tableHead">' +
				'<td>Level</td>' +
				'<td>Correct answers</td>' +
				'<td>Hints</td>' +
				'<td>Points</td>' +
			'</tr>' +
		'</table>'
	);

	getScore();
	var passedLevels = [];
	for(i=0;i<score.length;i++) {
		passedLevels.push(score[i].level);
		$('#scoreTable').append(
			'<tr>' +
				'<td>' + score[i].level + '</td>' +
				'<td>' + score[i].right + '</td>' +
				'<td>' + score[i].hints + '</td>' +
				'<td>' + score[i].points + '</td>' +
			'</tr>'
		);
	}

	if(passedLevels.length == 0) {
		var lastLevel = 1;
	} else {
		var lastLevel = Math.max.apply(null, passedLevels) + 1;
	}
	$('#scoreTable').append(
		'<tr>' +
			'<td>' + lastLevel + '</td>' +
			'<td>' + currentLevelRight + '</td>' +
			'<td>' + currentLevelHints + '</td>' +
			'<td>' + currentLevelPoints + '</td>' +
		'</tr>'
	);
}
