import ForeignExchangeForward from './foreignExchangeForward.js'

describe('ForeignExchangeForward', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new ForeignExchangeForward({ assetId: 'USDSGD' })
      expect(JSON.parse(JSON.stringify(test)).assetId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).assetId).toEqual('USDSGD')
    })
  })
})
