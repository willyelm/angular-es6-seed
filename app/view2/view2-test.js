/* eslint-env jasmine */
import {module, inject} from 'mocks'
import {View2Controller} from './view2-controller'
import view2 from './view2'

describe('myApp.view2 module', () => {
  beforeEach(module(view2.name))
  describe('view2 controller', () => {
    it('should ....', inject(($controller) => {
      var view2Ctrl = $controller(View2Controller)
      expect(view2Ctrl).toBeDefined()
    }))
  })
})
