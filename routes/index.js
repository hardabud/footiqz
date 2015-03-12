function index() {
	$('#content').empty();

	resetScore();
	$('#content').append(
		'<img src="http://www.hardabud.com/foot/img/footiqz.png"></img>' +
		'<a href="./1/1"><button>Play</button></a>' +
		'<a href="./rules"><button>Rules</button></a>' + 
		'<a href="./rank"><button>Ranking</button></a>' 
	);
}
