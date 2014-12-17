(function () {

	function Super(name) {
		this.name = name;
		this.colors = ['red'];
	}

	Super.prototype = {
		getColors: function () {
			return this.colors;
		}
	};

	function Sub(sup) {
		var Constructor = function () {
			sup.call(this);
		};
		Constructor.prototype = sup.prototype;
		var instance = new Constructor();
		return instance;
	}

	var sub1 = new Sub(Super);
	var sub2 = new Sub(Super);

	sub1.name = 'sub1';
	sub2.name = 'sub2';

	sub1.colors.push('blue');

	console.log(sub1.getColors());
	console.log(sub2.getColors());

})();