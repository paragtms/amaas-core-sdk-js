import { AMaaSModel } from '../../core'
import Decimal from 'decimal.js'

class Rate extends AMaaSModel {
  constructor({
    rateValue,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })

    Object.defineProperties(this, {
      _rateValue: { writable: true, enumerable: false },
      rateValue: {
        get: () => this._rateValue,
        set: (newRateValue) => {
          if (newRateValue) {
            this._rateValue = new Decimal(rateValue)
          } else {
            this._rateValue = new Decimal(0)
          }
        },
        enumerable: true
      }
    })

    this.rateValue = rateValue
  }
}

export default Rate
