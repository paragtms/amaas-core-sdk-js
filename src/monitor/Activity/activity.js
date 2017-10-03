import { AMaaSModel } from '../../core'

/**
 * Class representing a Monitor Item
 * @memberof module:monitor
 * @extends module:core.AMaaSModel
 */
class Activity extends AMaaSModel {
  /**
   * Construct a new Monitor item
   * @param {object} params - Item creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of owner
   * @param {number} params.clientId - Client ID associated with the Monitor Item
   * @param {string} params.activityId - Activity ID associated with the Monitor Item
   * @param {string} params.bookId - Book ID associated with the Monitor Item
   * @param {string} params.entity - entity of Monitor Item
   * @param {string} params.activityType - activityType of the Monitor Item
   * @param {string} params.source - source of the Monitor Item
   * @param {string} params.message - Message attached to the Monitor item
   * @param {string} params.referenceId -referenceId associated with the Monitor Item
   * @param {string} params.referenceType - referenceType associated with the Monitor Item
   */
  constructor({
    assetManagerId,
    clientId,
    activityId,
    bookId,
    entity,
    activityType,
    source,
    message,
    referenceId,
    referenceType,
    createdBy,
    createdTime,
    updatedBy,
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
    this.assetManagerId = assetManagerId
    this.clientId = clientId
    this.activityId = activityId
    this.bookId = bookId
    this.entity = entity
    this.activityType = activityType
    this.source = source
    this.message = message
    this.referenceId = referenceId
    this.referenceType = referenceType
  }
}

export default Activity
