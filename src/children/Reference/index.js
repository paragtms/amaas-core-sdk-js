import { AMaaSModel } from '../../core'

/**
 * Class representing a Reference
 * @memberof module:core
 * @extends module:core.AMaaSModel
 */
class Reference extends AMaaSModel {
  /**
    * Construct a new Reference instance
    * @param {object} params - Reference creation options:
    * @param {string} params.referenceValue - The identifier of this Reference (e.g. transactionId)
    * @param {boolean} [params.referencePrimary=false] - Whether the Reference is primary (a parent can only have 1 primary Reference)
    * @param {string} [params.createdBy] - ID of the user that created the Reference
    * @param {string} [params.updatedBy] - ID of the user that updated the Reference
    * @param {date} [params.createdTime] - Time that the Reference was created
    * @param {date} [params.updatedTime] - Time that the Reference was updated
    * @param {number} [params.version] - Version number of the Reference
  */
  constructor({
    referenceValue,
    referencePrimary,
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
    this.referenceValue = referenceValue
    this.referencePrimary = !!referencePrimary
  }
}

export default Reference
