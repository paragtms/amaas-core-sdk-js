import ForeignExchangeForward from './foreignExchangeForward.js'

const mockForwardParams = {
  assetId: 'EURUSD forward',
  assetIssuerId: 'testIssuerId',
  assetManagerId: 88,
  assetStatus: 'Active',
  currency: 'EUR',
  description: 'test description',
  displayName: 'test displayName',
  underlying: 'EURUSD',
  countryCodes: [],
  settlementDate: '2017-12-31',
  maturityDate: '2017-12-31',
  fixingDate: '2017-12-15',
  forwardRate: '2.03',
  comments: {},
  links: {},
  references: {}
}

describe('ForeignExchangeForward', () => {
  describe('constructor', () => {
    it('constructs properly', () => {
      const testFXForward = new ForeignExchangeForward(mockForwardParams)
      expect({ ...testFXForward }).toEqual(
        expect.objectContaining(mockForwardParams)
      )
    })
  })
})
