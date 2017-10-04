import ForeignExchangeSpot from '../ForeignExchangeSpot/foreignExchangeSpot.js'

/**
 * Class representing FXForward
 * @memberof module:assets
 * @extends module:assets.ForeignExchangeSpot
 */
class ForeignExchangeForward extends ForeignExchangeSpot {
  /**
   * Construct a new FXForward instance (if there is a fixingDate, it is an NDF)
   * @param {object} params - FXForward creation options:
   * @param {string} params.assetId - ID of the FXForward __(required)__
   * @param {string} params.assetIssuerId - ID of the Issuer
   * @param {number} params.assetManagerId - Asset Manager ID
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {string} [params.assetStatus] - Status of the asset 
   * @param {string} [params.currency] - Transacted currency
   * @param {string} [params.description] - Description of the ForeignExchangeForward
   * @param {string} [params.clientId] - ID of the client
   * @param {object} params.countryCodes - An array of country codes
   * @param {string} params.settlementDate - The date of exchange of ownership
   * @param {string} params.maturityDate - Maturity Date of the FX Forward
   * @param {string} [params.fixingDate] - The date of fixing exchange rate between two currencies 
   * @param {string} params.forwardRate - Currency exchange rate
   * @param {string} params.underlying - AssetId of the underlying ForeignExchange
   * @param {object} [params.comments] - Object of Comments attached to the Non Deliverable Forward
   * @param {object} [params.links] - Object of array of Links attached to the Non Deliverable Forward
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Non Deliverable Forward
   * @param {string} [params.updatedBy] - ID of the user that updated the Non Deliverable Forward
   * @param {date} [params.createdTime] - Time that the Non Deliverable Forward was created
   * @param {date} [params.updatedTime] - Time that the Non Deliverable Forward was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetId,
    assetIssuerId,
    assetManagerId,
    assetStatus = 'Active',
    currency,
    description = '',
    displayName,
    clientId,
    countryCodes,
    settlementDate,
    maturityDate,
    fixingDate,
    forwardRate,
    underlying,
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
      assetId,
      assetIssuerId,
      assetManagerId,
      assetStatus,
      currency,
      description,
      displayName,
      settlementDate,
      maturityDate,
      underlying,
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
    this.fixingDate = fixingDate
    this.forwardRate = forwardRate
  }
}

export default ForeignExchangeForward
