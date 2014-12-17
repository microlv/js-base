(function () {

	var scope = 'top-scope';

	(function () {
		console.log(scope);
		//scope = 'closure';
	})();

	var closure = function () {
		var b = 100;
		return function () {
			b++;
			console.log(b);
		};
	};

	var c1 = closure();
	c1();
	c1();

})();
