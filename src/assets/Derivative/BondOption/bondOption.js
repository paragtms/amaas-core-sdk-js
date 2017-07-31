import Decimal from 'decimal.js'

import Derivative from '../Derivative/derivative.js'
import { OPTION_STYLES, OPTION_TYPES } from '../../enums'

/**
 * Class representing an Bond Option
 * @memberof module:assets
 * @extends module:assets.Derivative
 */
class BondOption extends Derivative {
  /**
   * Construct a new Bond Option instance
   * @param {object} params - BondOption creation options
   * @param {number} params.assetManagerId - ID of Bond Option's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Bond Option __(required)__
   * @param {string} [params.assetClass=Derivative] - Auto-set to `Derivative` __(read-only)__
   * @param {string} [params.assetType] - Type of the Bond Option. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` for Derivative and subclasses
   * @param {string} [params.assetIssuerId] - ID of the Bond Option's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond Option
   * @param {string} [params.countryId] - ID of Bond Option's country
   * @param {string} [params.venueId] - ID of Bond Option's venue if applicable
   * @param {string} [params.currency] - Bond Option currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Expiry date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond Option
   * @param {string} [params.displayName] - Display name of the Bond Option
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.optionStyle - Option style __(required)__<br />
   * Available options:
   * <li>American</li>
   * <li>Bermudan</li>
   * <li>European</li>
   * @param {string} params.optionType - Option type __(required)__<br />
   * Available options:
   * <li>Put</li>
   * <li>Call</li>
   * @param {number} params.strike - Strike price of the Bond Option. Stored as a Decimal instance __(required)__
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Bond Option
   * @param {object} [params.links] - Object of array of Links attached to the Bond Option
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Bond Option. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Bond Option
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond Option
   * @param {date} [params.createdTime] - Time that the Bond Option was created
   * @param {date} [params.updatedTime] - Time that the Bond Option was updated
   * @param {number} [params.version] - Version number of the Bond Option
  */
  constructor({
    assetManagerId,
    assetId,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    expiryDate,
    description='',
    displayName,
    clientId,
    optionType,
    strike,
    underlyingAssetId,
    optionStyle,
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
      assetClass: 'Derivative',
      fungible: false,
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
      _optionType: { writable: true, enumerable: false },
      optionType: {
        get: () => this._optionType,
        set: (newOptionType) => {
          if (OPTION_TYPES.indexOf(newOptionType) === -1) {
            throw new Error(`Invalid Option Type: ${newOptionType}`)
          }
          this._optionType = newOptionType
        },
        enumerable: true
      },
      _optionStyle: { writable: true, enumerable: false },
      optionStyle: {
        get: () => this._optionStyle,
        set: (newOptionStyle) => {
          if (OPTION_STYLES.indexOf(newOptionStyle) === -1) {
            throw new Error(`Invalid Option Style: ${newOptionStyle}`)
          }
          this._optionStyle = newOptionStyle
        },
        enumerable: true
      },
      _strike: { writable: true, enumerable: false },
      strike: {
        get: () => this._strike,
        set: (newStrike) => {
          if (!newStrike) {
            this._strike = new Decimal(0)
          } else {
            this._strike = new Decimal(newStrike)
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
    this.optionStyle = optionStyle
    this.optionType = optionType
    this.strike = strike
    this.expiryDate = expiryDate
    this.underlyingAssetId = underlyingAssetId
  }
}

export default BondOption
