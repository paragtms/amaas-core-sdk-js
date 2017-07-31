import { AMaaSModel } from '../../core'

class Code extends AMaaSModel {
  constructor({
    codeValue,
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

    this.codeValue = codeValue
  }
}

export default Code
