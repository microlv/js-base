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

	var $q = {
		defer: function () {
			var deferred,
				pending = [];

			deferred = {
				resolve: function (obj) {
				},
				promise: {
					then: function (callback) {
						pending.push(callback);
					}
				}
			};
			return deferred;
		}
	};

	getDataFromServer().then(function (data) {
		console.log(data);
	});


})();