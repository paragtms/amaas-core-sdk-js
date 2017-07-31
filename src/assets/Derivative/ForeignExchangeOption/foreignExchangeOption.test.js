import Decimal from 'decimal.js'

import ForeignExchangeOption from './foreignExchangeOption'

describe('ForeignExchangeOption', () => {
  describe('constructor', () => {
    it('should catch attempts to write invalid option type', () => {
      let fxOption
      function construct() {
        fxOption = new ForeignExchangeOption({ optionType: 'notAType', optionStyle: 'American' })
      }
      expect(construct).toThrowError('Invalid Option Type: notAType')
    })

    it('should catch attempts to write invalid option style', () => {
      let fxOption
      function construct() {
        fxOption = new ForeignExchangeOption({ optionType: 'Put', optionStyle: 'notAType' })
      }
      expect(construct).toThrowError('Invalid Option Style: notAType')
    })

    it('should set strike to a decimal', () => {
      const fxOption = new ForeignExchangeOption({})
      expect(fxOption.strike).toEqual(new Decimal(0))
    })
  })
})
