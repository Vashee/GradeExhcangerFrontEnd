'use strict';

/**
 * @ngdoc function
 * @name gradeexchangerFrontEndApp.controller:RegistroalumnosCtrl
 * @description
 * # RegistroalumnosCtrl
 * Controller of the gradeexchangerFrontEndApp
 */

angular.module('gradeexchangerFrontEndApp')
  .controller('RegistroalumnosCtrl', function ($scope) {
    $scope.submitForm = function(isValid) {
	    if (isValid) {
	      window.alert('El alumno fue agregado con éxito');
	    }
	};
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
