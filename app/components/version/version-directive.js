import angular from 'angular'

class AppVersionDirective {
  constructor (version) {
    this.restrict = 'E'
    this.scope = {}
    this.version = version
  }
  link (scope, elm) {
    elm.text(this.version)
  }
}

export default angular
  .module('myApp.version.version-directive', [])
  .directive('appVersion', (version) => {
    return new AppVersionDirective(version)
  })
