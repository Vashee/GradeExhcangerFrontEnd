'use strict';

/**
 * @ngdoc function
 * @name gradeexchangerFrontEndApp.controller:CalificacionesalumnoCtrl
 * @description
 * # CalificacionesalumnoCtrl
 * Controller of the gradeexchangerFrontEndApp
 */
angular.module('gradeexchangerFrontEndApp')
  .controller('CalificacionesalumnoCtrl', function ($scope) {
  	$scope.submitForm = function(isValid) {
	    if (isValid) {
	      return true;
	    }
	};
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
