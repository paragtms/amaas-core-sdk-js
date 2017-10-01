import Asset from '../../Asset/asset.js'

/**
 * Class representing FX (this should never be instantiated directly, use the appropriate subclass instead).
 * Note that creating and editing FXBase subclasses and other public subclasses is a restricted action.
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class ForeignExchangeBase extends Asset {
  /**
   * Construct a new ForeignExchangeBase instance
   * @param {object} params - ForeignExchangeBase creation options:
   * @param {number} [params.assetManagerId=0] - Defaults to `0`
   * @param {number} params.assetId - ID of the ForeignExchangeBase __(required)__
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {string} [params.assetType] - Type of the ForeignExchangeBase. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for ForeignExchangeBase __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the ForeignExchangeBase's issuer
   * @param {string} [params.assetStatus=Active] - Status of the ForeignExchangeBase
   * @param {string} [params.description] - Description of the ForeignExchangeBase
   * @param {string} [params.displayName] - Display name of the ForeignExchangeBase
   * @param {array} params.countryCodes - Array of country codes __(required)__
   * @param {boolean} [params.rollPrice=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the ForeignExchangeBase
   * @param {object} [params.links] - Object of array of Links attached to the ForeignExchangeBase
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the ForeignExchangeBase. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the ForeignExchangeBase
   * @param {string} [params.updatedBy] - ID of the user that updated the ForeignExchangeBase
   * @param {date} [params.createdTime] - Time that the ForeignExchangeBase was created
   * @param {date} [params.updatedTime] - Time that the ForeignExchangeBase was updated
   * @param {number} params.version - Version number
  */
  constructor({
    assetId,
    assetManagerId = 0,
    assetIssuerId,
    assetStatus = 'Active',
    currency,
    description = '',
    displayName,
    countryCodes,
    clientId,
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
      currency,
      fungible: true,
      assetIssuerId,
      assetStatus,
      description,
      displayName,
      rollPrice: false,
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
    this.countryCodes = countryCodes
  }

  getBaseCurrency() {
    return this.assetId.slice(0, 3)
  }

  getCounterCurrency() {
    return this.assetId.slice(3, 6)
  }
}

export default ForeignExchangeBase
