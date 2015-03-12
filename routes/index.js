function index() {
	$('#content').empty();

	resetScore();
	$('#content').append(
		'<a href="./rank"><button>Rank</button></a>' + 
		'<a href="./rules"><button>Rules</button></a>' + 
		'<a href="./1/1"><button>Start</button></a>'
	);
}
