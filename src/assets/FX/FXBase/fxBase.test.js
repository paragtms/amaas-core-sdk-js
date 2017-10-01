import ForeignExchangeBase from './fxBase.js'

const mockFXBaseParams = {
  assetId: 'USDSGD',
  assetManagerId: 88,
  assetIssuerId: 'testID',
  assetStatus: 'Inactive',
  currency: 'USD',
  description: 'test description',
  displayName: 'USDSGD',
  countryCodes: [],
  comments: {},
  links: {},
  references: {}
}

describe('FXBase', () => {
  describe('constructor', () => {
    it('constructs properly', () => {
      const fxBase = new ForeignExchangeBase(mockFXBaseParams)
      expect({ ...fxBase }).toEqual(expect.objectContaining(mockFXBaseParams))
    })

    it('sets assetClass and assetType', () => {
      const fxBase = new ForeignExchangeBase(mockFXBaseParams)
      expect(fxBase.assetClass).toEqual('ForeignExchange')
      expect(fxBase.assetType).toEqual('ForeignExchangeBase')
    })

    it('sets defaults', () => {
      const initialParams = {
        ...mockFXBaseParams,
        assetManagerId: undefined,
        assetStatus: undefined
      }
      const expectedResult = {
        ...mockFXBaseParams,
        assetManagerId: 0,
        assetStatus: 'Active'
      }
      const FXBase = new ForeignExchangeBase(initialParams)
      expect({ ...FXBase }).toEqual(expect.objectContaining(expectedResult))
    })
  })

  describe('class methods', () => {
    let fx
    beforeAll(() => {
      fx = new ForeignExchangeBase(mockFXBaseParams)
    })
    it('getBaseCurrency should return base currency', () => {
      expect(fx.getBaseCurrency()).toEqual('USD')
      expect(fx.getCounterCurrency()).toEqual('SGD')
    })
  })
})
