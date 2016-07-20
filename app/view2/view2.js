import angular from 'angular'
import ngRoute from 'angular-route'

class View2Controller {
  constructor () {}
  get name () {
    return this._name;
  }
}

export default angular
  .module('myApp.view2', [
    ngRoute
  ])
  .config(($routeProvider) => {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: View2Controller
    });
  })
