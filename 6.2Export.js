
(function (window) {

	window.jQuery = {};

})(window);


//this using in underscore.js
(function () {

	var root = this;
	root.module = {};

}).call(this);


define('id', ['injection'], function (require) {

});

angular.module('id', ['injection', function (injection) {

}]);