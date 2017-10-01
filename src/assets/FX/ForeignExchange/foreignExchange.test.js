import ForeignExchange from './foreignExchange.js'

const mockForeignExchangeParams = {
  assetId: 'EURUSD',
  assetIssuerId: 'testIssuerId',
  assetStatus: 'Inactive',
  description: 'test description',
  displayName: 'test displayName',
  currency: 'EUR',
  countryCodes: [],
  major: true,
  comments: {},
  links: {},
  references: {}
}

describe('ForeignExchange', () => {
  describe('constructor', () => {
    it('constructs properly', () => {
      const testForeignExchange = new ForeignExchange(mockForeignExchangeParams)
      expect({ ...testForeignExchange }).toEqual(
        expect.objectContaining(testForeignExchange)
      )
    })

    it('defaults major', () => {
      const majorFalseParams = { ...mockForeignExchangeParams, major: false }
      const testForeignExchange = new ForeignExchange(majorFalseParams)
      expect(testForeignExchange.major).toBeFalsy()
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
