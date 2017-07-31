import Decimal from 'decimal.js'

import ListedDerivative from '../ListedDerivative/listedDerivative'
import { FUTURE_SETTLEMENT_TYPES }  from '../../enums.js'

/**
 * Class representing a Future
 * @memberof module:assets
 * @extends module:assets.ListedDerivative
 */
class Future extends ListedDerivative {
  /**
   * Construct a new Future instance
   * @param {object} params - Future creation options:
   * @param {number} params.assetManagerId - ID of Future's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Future __(required)__
   * @param {string} [params.assetClass=Future] - Class of the Future (a subclass of Future may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Future. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Future's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Future
   * @param {string} [params.countryId] - ID of Future's country
   * @param {string} [params.venueId] - ID of Future's venue if applicable
   * @param {string} [params.currency] - Asset currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Future
   * @param {string} [params.displayName] - Display name of the Future
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * Available options:
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as a Decimal instance
   * @param {number} params.tickSize - Future tick size. Stored as a Decimal instance __(required)__
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {string} [params.expiryDate=9999-12-31] - Date of the Future's expiry (YYYY-MM-DD)
   * @param {object} [params.comments] - Object of Comments attached to the Future
   * @param {object} [params.links] - Object of array of Links attached to the Future
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Future. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Future
   * @param {string} [params.updatedBy] - ID of the user that updated the Future
   * @param {date} [params.createdTime] - Time that the Future was created
   * @param {date} [params.updatedTime] - Time that the Future was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Future',
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    description='',
    displayName,
    clientId,
    settlementType,
    contractSize,
    pointValue,
    tickSize,
    quoteUnit,
    underlyingAssetId,
    expiryDate,
    comments,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      assetId,
      assetClass,
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
      description,
      displayName,
      clientId,
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _settlementType: { writable: true, enumerable: false },
      settlementType: {
        get: () => this._settlementType,
        set: (newSettlementType) => {
          if (settlementType) {
            if (FUTURE_SETTLEMENT_TYPES.indexOf(newSettlementType) === -1) {
              throw new Error(`Invalid Settlement Type: ${newSettlementType}`)
            }
            this._settlementType = newSettlementType
          }
        },
        enumerable: true
      },
      _pointValue: { writable: true, enumerable: false },
      pointValue: {
        get: () => this._pointValue,
        set: (newPointValue) => {
          // TODO: This should be replaced with a calculation
          if (newPointValue) {
            this._pointValue = new Decimal(newPointValue)
          } else {
            this._pointValue = new Decimal(0)
          }
        },
        enumerable: true
      },
      _tickSize: { writable: true, enumerable: false },
      tickSize: {
        get: () => this._tickSize,
        set: (newTickSize) => {
          if (!newTickSize) {
             this._tickSize = new Decimal(0)
          } else {
            this._tickSize = new Decimal(newTickSize)
          }
        },
        enumerable: true
      },
      _contractSize: { writable: true, enumerable: false },
      contractSize: {
        get: () => this._contractSize,
        set: (newContractSize) => {
          if (!newContractSize) {
             this._contractSize = new Decimal(0)
          } else {
            this._contractSize = new Decimal(newContractSize)
          }
        },
        enumerable: true
      },
      _expiryDate: { writable: true, enumerable: false },
      expiryDate: {
        get: () => this._expiryDate,
        set: (newExpiryDate) => {
          if (newExpiryDate) {
            this._expiryDate = newExpiryDate
          } else {
            this._expiryDate = '9999-12-31'
          }
        },
        enumerable: true
      }
    })
    this.settlementType = settlementType
    this.contractSize = contractSize
    this.pointValue = pointValue
    this.tickSize = tickSize
    this.quoteUnit = quoteUnit
    this.underlyingAssetId = underlyingAssetId
    this.expiryDate = expiryDate
  }

  getTickValue() {
    return this.tickSize.times(this.contractSize)
  }
}

export default Future
