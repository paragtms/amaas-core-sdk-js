import Rate from './'
import Decimal from 'decimal.js'

describe('Rate class', () => {
  describe('constructor', () => {
    it('should set rateValue to be instance of Decimal', () => {
      const testRate = new Rate({ rateValue: 12 })
      expect(testRate.rateValue).toBeInstanceOf(Decimal)
    })

    it('should set rateValue to 0 if not given', () => {
      const testRate = new Rate({})
      expect(testRate.rateValue).toBeInstanceOf(Decimal)
      expect(testRate.rateValue.toFixed(4)).toEqual('0.0000')
    })
  })
})
