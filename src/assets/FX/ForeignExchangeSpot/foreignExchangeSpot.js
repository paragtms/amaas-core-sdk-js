import ForeignExchange from '../ForeignExchange/foreignExchange.js'

/**
 * Class representing Spot ForeignExchange (Settles as soon as possible)
 * @memberof module:assets
 * @extends module:assets.ForeignExchange
 */
class ForeignExchangeSpot extends ForeignExchange {
  /**
   * Construct a new Foreign Exchange instance
   * @param {object} params - ForeignExchange creation options:
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} params.assetClass - Auto-set to `ForeignExchange` __(read-only)__
   * @param {string} [params.assetType] - Auto-set to `ForeignExchangeSpot` __(read-only)__
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetStatus=Active] - Status of the Foreign Exchange Spot
   * @param {string} [params.currency] - Transacted Currency for the FX pair (counterc currency)
   * @param {string} [params.description] - Description of the Foreign Exchange
   * @param {string} [params.displayName] - Display name of the ForeignExchange
   * @param {string} params.underlying - Underlying assetID of the ForeignExchangeBase
   * @param {string} params.settlementDate - Settlement date for the spot pair
   * @param {string} params.maturityDate - Maturity date for the spot pair
   * @param {array} params.countryCodes - Array of country codes __(required)__
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Foreign Exchange
   * @param {object} [params.links] - Object of array of Links attached to the Foreign Exchange
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Foreign Exchange. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Foreign Exchange
   * @param {string} [params.updatedBy] - ID of the user that updated the Foreign Exchange
   * @param {date} [params.createdTime] - Time that the Foreign Exchange was created
   * @param {date} [params.updatedTime] - Time that the Foreign Exchange was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetIssuerId,
    assetStatus = 'Active',
    description = '',
    displayName,
    underlying,
    settlementDate,
    maturityDate,
    currency,
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
      assetIssuerId,
      assetStatus,
      currency,
      description,
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
    })
    this.maturityDate = maturityDate
    this.underlying = underlying
    this.settlementDate = settlementDate
  }
}

export default ForeignExchangeSpot
