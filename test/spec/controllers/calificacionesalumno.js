'use strict';

describe('Controller: CalificacionesalumnoCtrl', function () {

  // load the controller's module
  beforeEach(module('gradeexchangerFrontEndApp'));

  var CalificacionesalumnoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalificacionesalumnoCtrl = $controller('CalificacionesalumnoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CalificacionesalumnoCtrl.awesomeThings.length).toBe(3);
  });
});
