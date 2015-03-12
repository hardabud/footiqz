function question(route) {
	$('#content').empty();

	var n = +route.params.question + 1; 
	if(n <= 15) { var next = n; } else { var next = 'end'; }
	$('#content').append(
		'<a id="nextBtn1" onclick="rightAnswer()" href="./' + route.params.level  + '/' + next + '"><button>Right</button></a>' + 
		'<a id="nextBtn2" onclick="wrongAnswer()" href="./' + route.params.level  + '/' + next + '"><button>Wrong</button></a>' 
	);

}
