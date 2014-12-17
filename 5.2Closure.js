(function () {

	var a = 50;
	var closure = function () {
		var a = 100;
		return (function () {
			return function () {
				console.log(a);
			};
		})();
	};

	var f = function (fun) {
		fun();
	};
	var c1 = closure();
	f(c1);

})();