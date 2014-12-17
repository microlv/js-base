var module = (function (module, undefined) {

	module.say = function () {
		console.log('say');
	};

	return module;

})(module || {}, undefined);


(function (module) {

	module || (module = {});

	module.hello = function () {
		console.log('hello');
	};

	for(m in module) {
		console.log(m);
	}

})(module);


