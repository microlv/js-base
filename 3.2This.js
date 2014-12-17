(function () {

	function Person(name) {
		this.name = name;
		this.say = function () {
			console.log(this.name + '> this:' + this);
		};
	}

	function Student() {
		this.write = function () {
			console.log(this.name + ' is write.');
		};
		this.read = function () {
			console.log(this.name + arguments);
		};
	}

	var p1 = new Person('Person1');

	var student = new Student();
	student.write.call(p1);
	student.read.call(p1, 'boo1', 'book2');
	student.read.apply(p1, ['boo1', 'book2']);


})();