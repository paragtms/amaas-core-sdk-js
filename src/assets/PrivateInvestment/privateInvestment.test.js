import Decimal from 'decimal.js'

import PrivateInvestment from './privateInvestment'

describe('Private Investment Class', () => {
  describe('constructor', () => {
    it('should set category', () => {
      const pI = new PrivateInvestment({ category: 'Private Equity'})
      expect(pI.category).toEqual('Private Equity')
    })
    it('should throw on invalid category', () => {
      const tester = () => new PrivateInvestment({ category: 'NotACategory' })
      expect(tester).toThrow()
    })
    it('should set subCategory', () => {
      const pI = new PrivateInvestment({ category: 'Private Equity', subCategory: 'Leverage Buyout Funds' })
      expect(pI.subCategory).toEqual('Leverage Buyout Funds')
    })
    it('should throw on invalid subCategory', () => {
      const invalidCat = () => new PrivateInvestment({ category: 'Private Equity', subCategory: 'NotACategory' })
      const notMatchingCat = () => new PrivateInvestment({ category: 'Private Equity', subCategory: 'Money Market Funds' })
      expect(invalidCat).toThrow()
      expect(notMatchingCat).toThrow()
    })
    it('should set numShares', () => {
      const pI = new PrivateInvestment({ numShares: 10 })
      expect(pI.numShares).toEqual(10)
    })
    it('should throw on non-integer numShares', () => {
      const tester = () => new PrivateInvestment({ numShares: 10.5 })
      expect(tester).toThrowError('Number of shares should be an integer. Received: 10.5')
    })
    it('should cast priceShare to Decimal instance', () => {
      const pI = new PrivateInvestment({ priceShare: 8 })
      expect(pI.priceShare).toBeInstanceOf(Decimal)
    })
    it('should set shareType', () => {
      const pI = new PrivateInvestment({ shareType: 'Ordinary Shares' })
      expect(pI.shareType).toEqual('Ordinary Shares')
    })
    it('should throw on invalid shareType', () => {
      const tester = () => new PrivateInvestment({ shareType: 'notAShareType' })
      expect(tester).toThrow()
    })
    it('should set lockUpPeriod', () => {
      const pI = new PrivateInvestment({ lockUpPeriod: 8 })
      expect(pI.lockUpPeriod).toEqual(8)
    })
    it('should throw on non-integer lockUpPeriod', () => {
      const tester = () => new PrivateInvestment({ lockUpPeriod: 8.8 })
      expect(tester).toThrow()
    })
    it('should set investmentTerm', () => {
      const pI = new PrivateInvestment({ investmentTerm: 8 })
      expect(pI.investmentTerm).toEqual(8)
    })
    it('should throw on non-integer investmentTerm', () => {
      const tester = () => new PrivateInvestment({ investmentTerm: 8.8 })
      expect(tester).toThrow()
    })
    it('should set ownership', () => {
      const ownership = [
        { partyId: 'ABC', split: '0.8' },
        { partyId: 'DEF', split: '0.2' },
      ]
      const pI = new PrivateInvestment({ ownership })
      expect(pI.ownership[0].split).toEqual('0.8')
      expect(pI.ownership[0].partyId).toEqual('ABC')
      expect(pI.ownership[1].split).toEqual('0.2')
      expect(pI.ownership[1].partyId).toEqual('DEF')
    })
    it('should throw on invalid ownership', () => {
      const notArray = () => new PrivateInvestment({ ownership: { foo: 'bar'} })
      expect(notArray).toThrowError('Ownership must be an array')
      const missingId = () => new PrivateInvestment({ ownership: [ { partyId: 'ABC', split: '0.5' }, { split: '0.5' } ] })
      expect(missingId).toThrowError('Missing partyId in ownership')
      const invalidSum = () => new PrivateInvestment({ ownership: [ { partyId: 'ABC', split: '0.5' }, { partyId: 'DEF', split: '1.5' } ] })
      expect(invalidSum).toThrowError('Ownership splits must sum to 1. Received: 2')
    })
  })
})