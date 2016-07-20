/* eslint-env jasmine */
import { module, inject } from 'mocks'
import versionDirective from './version-directive'

describe('myApp.version module', () => {
  beforeEach(module(versionDirective.name))

  describe('app-version directive', () => {
    it('should print current version', () => {
      module(($provide) => {
        $provide.value('version', 'TEST_VER')
      })
      inject(($compile, $rootScope) => {
        var element = $compile('<app-version></app-version>')($rootScope)
        expect(element.text()).toEqual('TEST_VER')
      })
    })
  })
})
