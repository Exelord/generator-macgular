home = angular.module 'home.controller', []

home.controller 'HomeCtrl', ($scope) ->
  vm = this
  vm.vale	=	10
  vm.change	=	0

  vm.changer = ->
    vm.vale++
    return

  $scope.$watch (->
    vm.vale
  ), (newVal, oldVal) ->
    if newVal != oldVal
      vm.change++
      return

  return
