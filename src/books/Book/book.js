import uuid from 'uuid'
import isEmpty from 'lodash/isEmpty'

import { AMaaSModel } from '../../core'
import { BOOK_TYPES } from './enums'
import { Reference } from '../../children'

/**
 * Class representing a Book
 * @memberof module:books
 * @extends module:core.AMaaSModel
 */
class Book extends AMaaSModel {
  /**
   * Construct a new Book object
   * @param {object} params - Book creation options:
   * @param {number} params.assetManagerId - ID of Book's Asset Manager __(required)__
   * @param {string} params.bookId - ID of this Book __(required)__
   * @param {string} params.bookType - Book Type<br />
   * Available options:
   * <li>Counterparty</li>
   * <li>Management</li>
   * <li>Trading</li>
   * <li>Wash</li>
   * @param {string} [params.bookStatus=Active] - status of Book
   * @param {number} [params.ownerId] - ID of the owner of the Book (e.g. the Trader who is responsible for the Book)
   * @param {number} [params.partyId] - ID of the party of which the activity being tracked belongs (e.g. Registered fund or HNWI)
   * @param {string} [params.closeTime] - Book close time. This is stored as local time, to be referenced against timezone
   * @param {string} [params.timezone] - Book's timezone (use this to determine absolute close time)
   * @param {string} [params.baseCurrency=USD] - Base currency for the Book
   * @param {string} [params.businessUnit] - A business unit to associate with the Book (e.g. Emerging Markets, Equities)
   * @param {string} [params.description] - Description of the book
   * @param {Array} [params.positions] - Array of objects [{asset_id: string, quantity: number}]
   * @param {object} [params.reference] - Reference for the Book
   * @param {string} [params.createdBy] - ID of the user that created this object (required if creating a new Book)
   * @param {string} [params.updatedBy] - ID of the user that updated this object (use if amending existing Book)
   * @param {date} [params.createdTime] - Time that the Book was created (required if creating new Book)
   * @param {date} [params.updatedTime] - Time that the Book was updated (required if amending existing Book)
   * @param {number} [params.version] - Version number of the Book
   */
  constructor({
    assetManagerId,
    bookId = uuid(),
    bookType = 'Trading',
    bookStatus = 'Active',
    ownerId,
    partyId,
    closeTime = '',
    timezone = '',
    baseCurrency = 'USD',
    businessUnit = '',
    description = '',
    reference = '',
    positions = [],
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
      _bookType: { writable: true, enumerable: false },
      bookType: {
        get: () => this._bookType,
        set: newBookType => {
          if (newBookType) {
            if (BOOK_TYPES.indexOf(newBookType) === -1) {
              throw new Error(`Invalid Book Type: ${newBookType}`)
            }
            this._bookType = newBookType
          }
        },
        enumerable: true
      },
    })
    this.assetManagerId = assetManagerId
    this.bookId = bookId
    this.bookType = bookType
    this.bookStatus = bookStatus
    this.ownerId = ownerId
    this.partyId = partyId
    this.closeTime = closeTime
    this.timezone = timezone
    this.baseCurrency = baseCurrency
    this.businessUnit = businessUnit
    this.description = description
    this.positions = positions
    this.reference = reference
  }

  positionsByAsset() {
    // TODO: Iterate over the positions array and sum by asset_id
  }
}

export default Book
