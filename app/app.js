import angular from 'angular'
import ngRoute from 'angular-route'

import view1 from 'view1/view1'
import view2 from 'view2/view2'
import version from 'components/version/version'

var myApp = angular
  .module('myApp', [
    ngRoute,
    version.name,
    view1.name,
    view2.name
  ])
  .config(($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('!')
    $routeProvider.otherwise({
      redirectTo: '/view1'
    })
  })

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document.body, [myApp.name])
  })
