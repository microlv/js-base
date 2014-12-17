(function () {

	console.log('/***===***/');
	var a = '0', b = 0, c = false;
	console.log('0==0' + (a == b ));
	console.log('0===0' + (a === b));
	console.log('0==false' + (a == c ));
	console.log('0===false' + (a === c));

	console.log('/***global value***/');
	g = 'global';
	var l = 'local';
	console.log(g === window.g);

	console.log('/***if(bool)***/');
	var array = [null, undefined, false, NaN, '', "", 0];
	_.forEach(array, function (k) {
		if (!k) {
			console.log(k);
		}
	});

	console.log('/***execute now***/');
	(function () {
		console.log('execute1');
	}());
	(function () {
		console.log('execute2');
	})();

	!function () {
		console.log('execute3');
	}();
	~function () {
		console.log('execute4');
	}();
	-function () {
		console.log('execute5');
	}();
	+function () {
		console.log('execute6');
	}();//see bootstrap

})();

(function () {
	var a = function () {

	};
	var b = {name: 'b'};
	b.__proto__ = {
		n: 1,
		say: function () {
			console.log(this.n);
		}
	};
	a.prototype = b;
	var c = function () {

	};
	c.prototype = Object.create(b);

	var a1 = new a();
	var a2 = new a();
	var c1 = new c();

	a1.__proto__ === b;
	a1.__proto__.__proto__ === b.__proto__;
	c1.__proto__ === b;
	c1.__proto__.__proto__ === b


	//*****1.think about it, when should use __proto__, prototype?
	//*****2.what the meaning of __proto__.__proto__
	//*****3.Object.create is the true new instance? don't have any relationship with b?

})();
