import Charge from './'
import Decimal from 'decimal.js'

describe('Charge class', () => {
  describe('constructor', () => {
    it('should set this.netAffecting to false if given false', () => {
      const testCharge = new Charge({ netAffecting: false })
      expect(testCharge.netAffecting).toBeFalsy()
    })

    it('should set this.netAffecting to true if given true', () => {
      const testCharge = new Charge({ netAffecting: true })
      expect(testCharge.netAffecting).toBeTruthy()
    })

    it('should set this.netAffecting to true if not passed', () => {
      const testCharge = new Charge({})
      expect(testCharge.netAffecting).toBeTruthy()
    })

    it('should set chargeValue to be instance of Decimal', () => {
      const testCharge = new Charge({ chargeValue: 12 })
      expect(testCharge.chargeValue).toBeInstanceOf(Decimal)
    })

    it('should set chargeValue to 0 if not given', () => {
      const testCharge = new Charge({})
      expect(testCharge.chargeValue).toBeInstanceOf(Decimal)
      expect(testCharge.chargeValue.toFixed(4)).toEqual('0.0000')
    })
  })
})
