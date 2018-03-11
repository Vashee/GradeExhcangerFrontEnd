'use strict';

describe('Controller: RegistroalumnosCtrl', function () {

  // load the controller's module
  beforeEach(module('gradeexchangerFrontEndApp'));

  var RegistroalumnosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistroalumnosCtrl = $controller('RegistroalumnosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistroalumnosCtrl.awesomeThings.length).toBe(3);
  });
});
