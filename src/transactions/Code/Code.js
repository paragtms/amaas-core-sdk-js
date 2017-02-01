import { AMaaSModel } from '../../core'

class Code extends AMaaSModel {
  constructor({ codeValue, active }, args, coreData) {
    super(coreData)
    this.codeValue = codeValue
    this.active = active
  }

  set active(newActive) {
    switch (newActive) {
      case false:
        this._active = false
        break
      case undefined:
        this._active = true
        break
      default:
        this._active = newActive
    }
  }

  get active() {
    return this._active
  }
}

export default Code
