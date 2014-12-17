(function () {

	if (true) {
		var a = 1;
	}

	A();
	function A() {
		console.log(a);
	}

	B();
	var B = function () {
		console.log(a);
	};

	//how about there 2 function combine?

})();