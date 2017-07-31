import Asset from '../../Asset/asset'

/**
 * Class representing a Synthetic
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class Synthetic extends Asset {
  /**
   * Construct a new Synthetic instance
   * @param {object} params - Synthetic creation options:
   * @param {number} params.assetManagerId - ID of Synthetic's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Synthetic] - Class of the Synthetic (a subclass of Synthetic may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Synthetic. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Whether the Synthetic is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the Synthetic's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Synthetic
   * @param {string} [params.countryId] - ID of Synthetic's country
   * @param {string} [params.venueId] - ID of Synthetic's venue if applicable
   * @param {string} [params.currency] - Synthetic currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Synthetic
   * @param {string} [params.displayName] - Display name of the Synthetic
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Synthetic
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Synthetic
   * @param {object} [params.links] - Object of array of Links attached to the Synthetic
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Synthetic
   * @param {string} [params.createdBy] - ID of the user that created the Synthetic
   * @param {string} [params.updatedBy] - ID of the user that updated the Synthetic
   * @param {date} [params.createdTime] - Time that the Synthetic was created
   * @param {date} [params.updatedTime] - Time that the Synthetic was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Synthetic',
    fungible=true,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    maturityDate='9999-12-31',
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
    version
  }) {
    super({
      assetManagerId,
      assetId,
      assetClass,
      fungible,
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
      version
    })
    this.maturityDate = maturityDate
  }
}

export default Synthetic
