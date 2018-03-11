'use strict';

describe('Controller: BuscarintercambiosCtrl', function () {

  // load the controller's module
  beforeEach(module('gradeexchangerFrontEndApp'));

  var BuscarintercambiosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuscarintercambiosCtrl = $controller('BuscarintercambiosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BuscarintercambiosCtrl.awesomeThings.length).toBe(3);
  });
});
