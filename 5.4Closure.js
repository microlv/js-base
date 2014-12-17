(function () {

	function print(exec) {
		setTimeout(exec);
	}

	for (var i = 0; i < 10; i++) {
		(function () {
			var t = i;
			print(function () {
				console.log(t);
			});
		})();
	}

})();