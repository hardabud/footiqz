function careerView(career) {
	$('#content').append(
		'<h1>Career</h1>' +
		'<table id="careerTable">' +
			'<tr class="tableHead">' +
				'<td>Years</td>' +
				'<td></td>' +
				'<td>Club</td>' +
			'</tr>' +
		'</table>'
	);

	for(i=0;i<career.length;i++) {
		if(career[i].loan == true) { var loan = '<b> > </b>'; }
		else { var loan = '   '; }
		$('#careerTable').append(
			'<tr>' +
				'<td>' + career[i].years + '</td>' +
				'<td>' + loan + '</td>' +
				'<td>' + career[i].club + '</td>' +
			'</tr>'
		)
	}
}
