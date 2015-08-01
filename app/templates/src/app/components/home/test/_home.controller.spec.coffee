describe 'controllers', ->
  beforeEach module('home.controller')
  $scope = undefined
  ctrl = undefined
  beforeEach inject(($controller, $rootScope) ->
    $scope = $rootScope.$new()
    ctrl = $controller('HomeCtrl', $scope: $scope)
    $scope.$digest()
    return
  )
  it 'should vale has a number', ->
    expect(ctrl.vale).toEqual jasmine.any(Number)
    return
  it 'should change has 1', ->
    ctrl.changer()
    $scope.$digest()
    expect(ctrl.change).toEqual 1
    return
  return
