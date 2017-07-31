import { Address } from './'

describe('Address', () => {
  describe('constructor', () => {
    it('should throw if attempting to set invalid countryId (length > 3)', () => {
      let address
      function construct() {
      address = new Address({ countryId: 'Singapore' })
      }
      expect(construct).toThrowError(new Error('Invalid Country ID: Singapore'))
    })
    it('should set active to true if not assigned', () => {
      const testAddress = new Address({})
      expect(testAddress.active).toEqual(true)
    })
    it('should set active to false if assigned false', () => {
      const testAddress = new Address({ active: false })
      expect(testAddress.active).toEqual(false)
    })
  })
})
