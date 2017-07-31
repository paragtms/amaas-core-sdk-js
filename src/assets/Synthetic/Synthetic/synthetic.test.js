import Synthetic from './synthetic'

describe('Synthetic Class', () => {
  describe('constructor', () => {
    it('defaults maturityDate correctly', () => {
      const testSyn = new Synthetic({})
      expect(testSyn.maturityDate).toEqual('9999-12-31')
    })
  })
})
