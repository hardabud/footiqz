function style() {
	var width = window.innerWidth;
	if(width >= 800) { var w = 800; } else { var w = width; }
	$('#content').css({
		'margin': 'auto',
		'width' : w,
		'font-size' : 24
	});
}
