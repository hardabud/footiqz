var score = [];
var right = 0;
var wrong = 0;
var hints = 0;
var life = 3;
var currentLevelPoints = 0;
var currentLevelRight = 0;
var currentLevelHints = 0;
var finalScore = 0;

function rightAnswer() { right = right + 1; }
function wrongAnswer() { wrong = wrong + 1; }
function failedLevel() { life = life - 1; }
function useHint() { hints = hints + 1; }

function resetLevel() {
	right = 0;
	wrong = 0;
	hints = 0;
	currentLevelPoints = 0;
	currentLevelRight = 0;
	currentLevelHints = 0;
}

function resetScore() {
	score = [];
	right = 0;
	wrong = 0;
	hints = 0;
	life = 3;
	lastLevelPlayed = 0;
	currentLevelPoints = 0;
	currentLevelRight = 0;
	currentLevelHints = 0;
	finalScore = 0;
}

function pushScore(level) {
	var points = right * 5 - hints;
	score.push({level: level, right: right, wrong: wrong, hints: hints, points: points});
	resetLevel();
}

function getScore() {
	currentLevelRight = right;
	currentLevelHints = hints;
	currentLevelPoints = right * 5 - hints;
	if(score.length == 0) {
		finalScore = currentLevelPoints;
	} else {
		finalScore = currentLevelPoints;
		for(i=0;i<score.length;i++) {
			finalScore = finalScore + score[i].points
		}
	}
}



