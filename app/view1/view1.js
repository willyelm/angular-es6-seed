import angular from 'angular'
import ngRoute from 'angular-route'
import {View1Controller} from './view1-controller'

export default angular
  .module('myApp.view1', [
    ngRoute
  ])
  .config(($routeProvider) => {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: View1Controller
    })
  })
