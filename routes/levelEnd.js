function levelEnd(route) {
	$('#content').empty();
	
	scoreTableView();

	var nextLevel = +route.params.level + 1;
	var levelRight = right;
	if(levelRight >= 10) {
		pushScore(+route.params.level);
		if(nextLevel == 21) {
			$('#content').append('<a id="nextBtn" href="./bravo"><button>Bravo</button></a>');
		} else {
			$('#content').append('<a id="nextBtn" href="./' + nextLevel  + '/1"><button>Next level</button></a>');
		}
	} else {
		failedLevel();
		if(life >= 1) {
			resetLevel();
			$('#content').append('<a id="nextBtn" href="./' + route.params.level  + '/1"><button>Retry level</button></a>');
		} else {
			page('/gameover');
		}
	}
}
