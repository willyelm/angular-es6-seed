/* eslint-env jasmine */
import {module, inject} from 'mocks'
import {View1Controller} from './view1-controller'
import view1 from './view1'

describe('myApp.view1 module', () => {
  beforeEach(module(view1.name))
  describe('view1 controller', () => {
    it('should ....', inject(($controller) => {
      var view1Ctrl = $controller(View1Controller)
      expect(view1Ctrl).toBeDefined()
    }))
  })
})
