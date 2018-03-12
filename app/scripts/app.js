'use strict';

/**
 * @ngdoc overview
 * @name gradeexchangerFrontEndApp
 * @description
 * # gradeexchangerFrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('gradeexchangerFrontEndApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/registroAlumnos', {
        templateUrl: 'views/registroAlumnos.html',
        controller: 'RegistroalumnosCtrl',
        controllerAs: 'registroalumnos'
      })
      .when('/calificacionesAlumno', {
        templateUrl: 'views/calificacionesalumno.html',
        controller: 'CalificacionesalumnoCtrl',
        controllerAs: 'calificacionesAlumno'
      })
      .when('/buscarIntercambios', {
        templateUrl: 'views/buscarintercambios.html',
        controller: 'BuscarintercambiosCtrl',
        controllerAs: 'buscarIntercambios'
      })
      .when('/revalidaralumno', {
        templateUrl: 'views/revalidaralumno.html',
        controller: 'RevalidaralumnoCtrl',
        controllerAs: 'revalidaralumno'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
