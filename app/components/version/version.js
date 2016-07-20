import angular from 'angular'
import versionDirective from './version-directive'
import versionFilter from './version-filter'

export default angular
  .module('myApp.version', [
    versionDirective.name,
    versionFilter.name
  ])
  .value('version', '0.1')
