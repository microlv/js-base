(function () {

	function Super() {
		this.name = 'Super';
		this.colors = ['red'];
	}

	Super.prototype = {
//		remove item into constructor
	};

	function Sub(name) {
		Super.call(this);
		this.name = name;
	}

	Sub.prototype = Super.prototype;

	var sub1 = new Sub('sub1');
	var sub2 = new Sub('sub2');

	sub1.colors.push('blue');

	console.log(sub1.colors);
	console.log(sub2.colors);

})();