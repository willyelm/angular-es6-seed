/* eslint-env jasmine */
import { module, inject } from 'mocks'
import versionFilter from './version-filter'

describe('myApp.version module', () => {
  beforeEach(module(versionFilter.name))

  describe('interpolate filter', () => {
    beforeEach(module(($provide) => {
      $provide.value('version', 'TEST_VER')
    }))

    it('should replace VERSION', inject((interpolateFilter) => {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after')
    }))
  })
})
