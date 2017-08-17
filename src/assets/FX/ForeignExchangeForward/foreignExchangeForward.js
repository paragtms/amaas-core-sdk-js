import ForeignExchangeBase from '../FXBase/fxBase.js'

/**
 * Class representing FX
 * @memberof module:assets
 * @extends module:assets.ForeignExchangeBase
 */
class ForeignExchangeForward extends ForeignExchangeBase {
  /**
   * Construct a new Non Deliverable Forward instance
   * @param {object} params - NonDeliverableForward creation options:
   * @param {number} params.assetId - ID of the Non Deliverable Forward __(required)__
   * @param {string} [params.assetClass=ForeignExchange] - Auto-set to `ForeignExchange` __(read-only)__
   * @param {string} [params.assetManagerId] - ID if the asset manager
   * @param {string} [params.assetStatus] - Status of the asset 
   * @param {string} [params.description] - Description of the ForeignExchangeForward
   * @param {string} [params.clientId] - ID of the client
   * @param {boolean} [params.major] - Is major currency or not 
   * @param {object} [params.countryCodes] - An array of country codes
   * @param {string} [params.settlementDate] - The date of exchange of ownership
   * @param {string} [params.fixingDate] - The date of fixing exchange rate between two currencies 
   * @param {string} [params.forwardRate] - Currency exchange rate
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
    assetManagerId,
    assetIssuerId,
    assetStatus='Active',
    description='',
    clientId,
    major,
    countryCodes,
    settlementDate,
    fixingDate,
    forwardRate,
    displayName,    
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
      assetStatus,
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
  }
}

export default ForeignExchangeForward
