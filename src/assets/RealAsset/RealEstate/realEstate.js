import RealAsset from '../RealAsset/realAsset'

/**
 * Class representing Real Estate
 * @memberof module:assets
 * @extends module:assets.RealAsset
 */
class RealEstate extends RealAsset {
  /**
   * Construct a new Real Estate instance
   * @param {object} params - RealEstate creation options:
   * @param {number} params.assetManagerId - ID of Real Estate's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Real Estate __(required)__
   * @param {string} [params.assetClass=RealAsset] - Auto-set to `RealEstate` __(read-only)__
   * @param {string} [params.assetType] - Type of the Real Estate. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Real Estate's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Real Estate
   * @param {string} [params.countryId] - ID of Real Estate's country
   * @param {string} [params.venueId] - ID of Real Estate's venue if applicable
   * @param {string} [params.currency] - Real Estate currency (e.g. USD, SGD)
   * @param {string} [params.description] - Description of the Real Estate
   * @param {string} [params.displayName] - Display name of the Real Estate
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Real Estate
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Real Estate
   * @param {object} [params.links] - Object of array of Links attached to the Real Estate
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Real Estate. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Real Estate
   * @param {string} [params.updatedBy] - ID of the user that updated the Real Estate
   * @param {date} [params.createdTime] - Time that the Real Estate was created
   * @param {date} [params.updatedTime] - Time that the Real Estate was updated
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
    description='',
    displayName,
    rollPrice,
    clientId,
    comments,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version,
    ownership
  }) {
    super({
      assetManagerId,
      assetId,
      assetClass: 'RealEstate',
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
      maturityDate,
      description,
      displayName,
      rollPrice,
      clientId,
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version,
      ownership
    })
  }
}

export default RealEstate
