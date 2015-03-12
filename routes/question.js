function question(route) {
	$('#content').empty();

	var n = +route.params.question + 1; 
	if(n <= 15) { var next = n; } else { var next = 'end'; }

	$.getJSON('http://www.hardabud.com/foot/api/q/?l=1', function(json) {
		var playerId = json.id;
		var career = json.career;
		var hints = json.hints;
		var choice = json.choice;
		
		careerView(career);
		hintsView(hints);
		choiceView(choice, route.params.level, next, playerId);
	})

}
