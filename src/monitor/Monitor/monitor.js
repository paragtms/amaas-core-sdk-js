import { AMaaSModel } from '../../core'

/**
 * Class representing a Monitor Item
 * @memberof module:monitor
 * @extends module:core.AMaaSModel
 */
class Item extends AMaaSModel {
  /**
   * Construct a new Monitor item
   * @param {object} params - Item creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of owner
   * @param {string} params.itemId - Monitor Item ID
   * @param {string} params.itemClass - Class of the Monitor Item<br />
   * Available Options: 
   * <li>Exception</li>
   * <li>Notification</li>
   * @param {string} params.itemType - Type of Monitor Item
   * @param {string} params.itemLevel - Level of Monitor Item<br/>
   * Available options:
   * <li>Info</li>
   * <li>Warning</li>
   * <li>Error</li>
   * <li>Critical</li>
   * @param {string} params.itemSource - Source of the Monitor Item
   * @param {message} params.message - Message attached to the item
   * @param {string} params.itemStatus - Status of the Item<br/>
   * Available options:
   * <li>Open</li>
   * <li>Closed</li>
   * <li>Resubmitted</li>
   * <li>Superseded</li>
   * @param {string} params.assetBookId - Book ID associated with the Monitor Item
   * @param {string} params.transactionId - Transaction ID associated with the Monitor Item
   * @param {string} params.assetId - Asset ID associated with the Monitor Item
   * @param {string} params.itemDate - Date of the Monitor Item
   */
  constructor({
    assetManagerId,
    itemId,
    itemClass,
    itemType,
    itemLevel,
    itemSource,
    message,
    itemStatus,
    assetBookId,
    transactionId,
    assetId,
    itemDate,
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
    this.itemId = itemId
    this.itemClass = itemClass
    this.itemType = itemType
    this.itemLevel = itemLevel
    this.itemSource = itemSource
    this.message = message
    this.itemStatus = itemStatus
    this.assetBookId = assetBookId
    this.transactionId = transactionId
    this.assetId = assetId
    this.itemDate = itemDate
  }
}

export default Item