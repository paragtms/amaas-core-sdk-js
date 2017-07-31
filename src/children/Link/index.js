import { AMaaSModel } from '../../core'

class Link extends AMaaSModel {
  constructor({
    linkedId,
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

    this.linkedId = linkedId
  }
}

export default Link
