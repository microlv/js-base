(function () {

	function DataService() {
		this.loadData = function (callback) {
			if (typeof callback === "function") {
				callback();
			}
		};
	}

	(new DataService()).loadData(function () {
		console.log(this);
	});

})();