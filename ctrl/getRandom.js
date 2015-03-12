function shuffle(o){ 
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
function getRandom(arr, nb) {
	var newArr = [];
	var shfl = shuffle(arr);
	for(i=0;i<nb;i++) {
		newArr.push(shfl[i]);
	}
	return newArr;
}
