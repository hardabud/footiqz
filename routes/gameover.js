function gameover() {
	$('#content').empty();

	scoreTableView();

	$('#content').append(
		'<p>Game over. Your Score:' + finalScore + '</p>' +
		'<a id="nextBtn1" onclick="resetScore()" href="./1/1"><button>Play again</button></a>' +
		'<a id="nextBtn2" href="./rank"><button>See rank</button></a>'
	);

}
