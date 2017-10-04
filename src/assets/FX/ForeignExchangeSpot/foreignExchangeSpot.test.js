import ForeignExchangeSpot from './foreignExchangeSpot.js'

const mockFXSpotParams = {
  assetId: 'EURUSD:2017-12-31',
  assetIssuerId: 'testIssuerId',
  assetStatus: 'Inactive',
  description: 'test description',
  displayName: 'test displayName',
  underlying: 'EURUSD',
  settlementDate: '2017-12-31',
  maturityDate: '2017-12-31',
  currency: 'EUR',
  countryCodes: [],
  comments: {},
  links: {},
  references: {}
}

describe('ForeignExchangeSpot', () => {
  describe('constrcuctor', () => {
    it('constructs properly', () => {
      const spot = new ForeignExchangeSpot(mockFXSpotParams)
      expect({ ...spot }).toEqual(expect.objectContaining(mockFXSpotParams))
    })

    it('inherits major', () => {
      const spot = new ForeignExchangeSpot(mockFXSpotParams)
      expect(spot.major).toBeFalsy()
    })
  })
})
