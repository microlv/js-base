(function () {

	function jQuery() {
		return new jQuery.prototype.init();
	}

	jQuery.prototype = {
		init: function () {
			return {name: 'jQuery', version: '1.0.0.1'};
		}
	};

	jQuery.prototype.init.prototype = jQuery.prototype;

	console.log(jQuery());

})();
