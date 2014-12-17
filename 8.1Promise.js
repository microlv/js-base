(function () {

	function getDataFromServer() {
		var data = [];
		setTimeout(function () {
			data = [1, 2, 3, 4];
		}, 3000);
		return [];
	}

	var result = getDataFromServer();
	console.log(result);

//	getDataFromServer().then(function (data) {
//		console.log(data);
//	});

})();