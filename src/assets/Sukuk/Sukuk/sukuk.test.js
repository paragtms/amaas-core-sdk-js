import Sukuk from './sukuk'

describe('Sukuk', () => {
  describe('constructor', () => {
    it('defaults maturityDate correctly', () => {
      const testSukuk = new Sukuk({})
      expect(testSukuk.maturityDate).toEqual('9999-12-31')
    })
  })
})
