import ForeignExchangeBase from '../FXBase/fxBase.js'

/**
 * Class representing FXForward
 * @memberof module:assets
 * @extends module:assets.ForeignExchangeBase
 */
class ForeignExchangeForward extends ForeignExchangeBase {
  /**
   * Construct a new FXForward instance
   * @param {object} params - FXForward creation options:
   * @param {string} params.assetId - ID of the FXForward __(required)__
   * @param {string} params.assetIssuerId - ID of the Issuer
   * @param {number} params.assetManagerId - Asset Manager ID
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {string} [params.assetStatus] - Status of the asset 
   * @param {string} [params.description] - Description of the ForeignExchangeForward
   * @param {string} [params.clientId] - ID of the client
   * @param {boolean} params.major - Whether it is a major currency or not 
   * @param {object} params.countryCodes - An array of country codes
   * @param {string} params.settlementDate - The date of exchange of ownership
   * @param {string} [params.fixingDate] - The date of fixing exchange rate between two currencies 
   * @param {string} params.forwardRate - Currency exchange rate
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
    assetStatus='Active',
    description='',
    displayName,    
    clientId,
    major,
    countryCodes,
    settlementDate,
    fixingDate,
    forwardRate,
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
      description,
      displayName,
      countryCodes,
      major,
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
    this.settlementDate = settlementDate
    this.fixingDate = fixingDate
    this.forwardRate = forwardRate
  }
}

export default ForeignExchangeForward
