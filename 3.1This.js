(function () {

	function Person(name) {
		this.name = name;
		this.say = function () {
			console.log(this.name + '> this:' + this);
		};
	}

	var p1 = new Person('p1');
	p1.say();

	var s1 = p1.say;
	s1();

})();