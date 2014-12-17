(function () {

	function getDataFromServer() {
		var data = [];
		var d = $q.defer();
		setTimeout(function () {
			data = [1, 2, 3, 4];
			d.resolve(data);
		}, 3000);
		console.log('getDataFromServer ...');
		return d.promise;
	}

	var $q = {
		defer: function () {
			var deferred,
				pending = [];

			deferred = {
				resolve: function (obj) {
					while (pending.length) {
						try {
							var exec = pending.shift();
							exec(obj);
						} catch (e) {
						}
					}
				},
				promise: {
					then: function (callback) {
						var result = $q.defer();
						var childCallback = function (value) {
							try {
								result.resolve(callback);
							} catch (e) {
							}
						};
						pending.push(childCallback);
						return result.promise;
					}
				}
			};
			return deferred;
		}
	};

	getDataFromServer().then(function (data) {
		console.log('server response: ' + data);
	}).then(function (otherData) {
		console.log('execute after server response: ' + otherData);
	});


})();