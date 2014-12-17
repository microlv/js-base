(function () {

	function Super() {
		this.name = 'Super';
		this.colors = ['red'];
	}

	Super.prototype = {
		getColors: function () {
			return this.colors;
		}
	};

	function Sub(name) {
		Super.call(this);
		this.name = name;
	}

	Sub.prototype = Super.prototype;
	//Sub.prototype = new Super();
	//Sub.prototype = Super;

	var sub1 = new Sub('sub1');
	var sub2 = new Sub('sub2');

	sub1.colors.push('blue');

	console.log(sub1.getColors());
	console.log(sub2.getColors());

})();