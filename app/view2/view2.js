import angular from 'angular'
import ngRoute from 'angular-route'
import {View2Controller} from './view2-controller'

export default angular
  .module('myApp.view2', [
    ngRoute
  ])
  .config(($routeProvider) => {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: View2Controller
    })
  })
