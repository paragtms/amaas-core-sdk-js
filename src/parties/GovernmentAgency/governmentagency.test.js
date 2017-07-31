import GovernmentAgency from './governmentAgency.js'

describe('GovernmentAgency', () => {
  describe('constructor', () => {
    it('should set url', () => {
      const testGov = new GovernmentAgency({url: 'testURL'})
      expect(testGov.url).toEqual('testURL')
    })

    it('should set displayName', () => {
      const testGov = new GovernmentAgency({displayName: 'testDisplayName'})
      expect(testGov.displayName).toEqual('testDisplayName')
    })

    it('should set legalName', () => {
      const testGov = new GovernmentAgency({legalName: 'testLegalName'})
      expect(testGov.legalName).toEqual('testLegalName')
    })

    it('should set partyClass to Organisation', () => {
      const testGov = new GovernmentAgency({})
      expect(testGov.partyClass).toEqual('Organisation')
    })
    it('should set partyType to Government Agency', () => {
      const testGov = new GovernmentAgency({})
      expect(testGov.partyType).toEqual('GovernmentAgency')
    })
  })
})
