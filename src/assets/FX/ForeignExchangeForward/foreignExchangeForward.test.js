import ForeignExchangeForward from './foreignExchangeForward.js'

describe('ForeignExchangeForward', () => {
  describe('constructor', () => {
    it('should set fixingDate', () => {
      const testFXForward = new ForeignExchangeForward({ fixingDate: '2017-12-31' })
      expect(testFXForward.fixingDate).toEqual('2017-12-31')
    })
    it('should set currency', () => {
      const fxf = new ForeignExchangeForward({ currency: 'USD' })
      expect(fxf.currency).toEqual('USD')
    })
  })
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new ForeignExchangeForward({ assetId: 'USDSGD' })
      expect(JSON.parse(JSON.stringify(test)).assetId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).assetId).toEqual('USDSGD')
    })
  })
})
