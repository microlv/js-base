(function (global, factory) {
	if (typeof module === "object" && typeof module.exports === "object") {

	} else {
		factory(global);
	}
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	function jQuery() {
		return new jQuery.prototype.init();
	}
	jQuery.prototype = {
		init: function () {
			return {name: 'jQueryuery', version: '1.0.0.1'};
		}
	};

	jQuery.prototype.init.prototype = jQuery.prototype;
	jQuery.fn = jQuery.prototype;

	jQuery.extend = jQuery.fn.extend = function () {

	};

	jQuery.extend();
	jQuery.fn.extend();

	window.jQuery = window.$ = jQuery;

}));
