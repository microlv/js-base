/**
 * Created by lva on 2014/10/15.
 */
(function () {

	function getDataFromServer() {
		var data = [];
		var d = $q.defer();
		setTimeout(function () {
			data = [1, 2, 3, 4];
			d.resolve(data);
		}, 3000);
		return d.promise;
	}

	getDataFromServer().then(function (data) {
		console.log(data);
	});


})();