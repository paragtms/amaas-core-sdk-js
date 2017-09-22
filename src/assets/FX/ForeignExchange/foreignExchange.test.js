import ForeignExchange from './foreignExchange.js'

describe('ForeignExchange', () => {
  describe('constructor', () => {
    it('should set currency', () => {
      const fx = new ForeignExchange({ currency: 'USD' })
      expect(fx.currency).toEqual('USD')
    })
  })
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new ForeignExchange({ assetId: 'USDSGD' })
      expect(JSON.parse(JSON.stringify(test)).assetId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).assetId).toEqual('USDSGD')
    })
  })
  describe('get currency functions', () => {
    const fx = new ForeignExchange({ assetId: 'USDSGD' })
    it('getBaseCurrency should return first 3 characters of assetId', () => {
      expect(fx.getBaseCurrency()).toEqual('USD')
    })
    it('getCounterCurrency should return second 3 characters of assetId', () => {
      expect(fx.getCounterCurrency()).toEqual('SGD')
    })
  })
})
