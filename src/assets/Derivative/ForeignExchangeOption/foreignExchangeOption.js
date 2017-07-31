import Decimal from 'decimal.js'

import Derivative from '../../Derivative/Derivative/derivative'
import { OPTION_STYLES, OPTION_TYPES } from '../../enums.js'

/**
 * Class representing an FX Option
 * @memberof module:assets
 * @extends module:assets.Derivative
 */
class ForeignExchangeOption extends Derivative {
  /**
   * Construct a new FX Option instance
   * @param {object} params - ForeignExchangeOption creation options:
   * @param {number} params.assetManagerId - ID of FX Option's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {string} [params.assetType] - Type of the FX Option. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the FX Option's issuer
   * @param {string} [params.assetStatus=Active] - Status of the FX Option
   * @param {string} [params.countryId] - ID of FX Option's country
   * @param {string} [params.venueId] - ID of FX Option's venue if applicable
   * @param {string} [params.currency] - FX Option currency (e.g. USD, SGD)
   * @param {string} [params.issueDate] - Issue date (YYYY-MM-DD)
   * @param {string} [params.expiryDate] - Expiry date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the FX Option
   * @param {string} [params.displayName] - Display name of the FX Option
   * @param {string} [params.clientId] - ID of the client to which the FX Option belongs
   * @param {string} params.optionStyle - FX Option style __(required)__<br />
   * Available options:
   * <li>American</li>
   * <li>Bermudan</li>
   * <li>European</li>
   * @param {string} params.optionType - FX Option type __(required)__<br />
   * Available options:
   * <li>Put</li>
   * <li>Call</li>
   * @param {number} params.strike - Strike price of the FX Option __(required)__
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the FX Option
   * @param {object} [params.links] - Object of array of Links attached to the FX Option
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the FX Option. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the FX Option
   * @param {string} [params.updatedBy] - ID of the user that updated the FX Option
   * @param {date} [params.createdTime] - Time that the FX Option was created
   * @param {date} [params.updatedTime] - Time that the FX Option was updated
   * @param {number} [params.version] - Version number
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
      assetClass: 'ForeignExchange',
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
          if (newOptionType) {
            if (OPTION_TYPES.indexOf(newOptionType) === -1) {
              throw new Error(`Invalid Option Type: ${newOptionType}`)
            }
            this._optionType = newOptionType
          }
        },
        enumerable: true
      },
      _optionStyle: { writable: true, enumerable: false },
      optionStyle: {
        get: () => this._optionStyle,
        set: (newOptionStyle) => {
          if (newOptionStyle) {
            if (OPTION_STYLES.indexOf(newOptionStyle) === -1) {
              throw new Error(`Invalid Option Style: ${newOptionStyle}`)
            }
            this._optionStyle = newOptionStyle
          }
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
    this.optionType = optionType
    this.strike = strike
    this.expiryDate = expiryDate
    this.underlyingAssetId = underlyingAssetId
    this.optionStyle = optionStyle
  }
}

export default ForeignExchangeOption
