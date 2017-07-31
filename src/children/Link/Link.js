import { AMaaSModel } from '../../core'

class Link extends AMaaSModel {
  constructor({
    active,
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
    this.active = active === false ? false : true
  }
}

export default Link
