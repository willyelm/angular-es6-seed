import angular from 'angular'

export default angular
  .module('myApp.version.interpolate-filter', [])
  .filter('interpolate', (version) => {
    return (text) => {
      return String(text).replace(/\%VERSION\%/mg, version)
    }
  })
