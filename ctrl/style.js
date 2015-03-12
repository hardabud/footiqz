function style() {
	var width = window.innerWidth;
	if(width >= 800) { 
		var w = 800; 
		var f = '20px';
	} else { 
		var w = width; 
		var f = '24px';
	}
	$('#content').css({
		'margin': 'auto',
		'width' : w,
		'font-size' : f
	});
}
