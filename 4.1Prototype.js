(function () {

	function Super() {

	}

	Super.prototype.name = 'Super';
	Super.prototype.colors = ['red'];

	function Sub(name) {
		this.name = name;
	}

	Sub.prototype = Super.prototype;
//	Sub.prototype.constructor = Sub;

	var sub1 = new Sub('sub1');
	var sub2 = new Sub('sub2');

	sub1.colors = [];
	//sub1.colors.push('blue');

	console.log(sub1.colors);
	console.log(sub2.colors);

})();