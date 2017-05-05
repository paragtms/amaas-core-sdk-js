import Asset from '../../Asset/asset'

/**
 * Class representing an Index
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class Index extends Asset {
  /**
   * Construct a new Index instance
   * @param {object} params - Index creation options:
   * @param {number} params.assetManagerId - ID of Index's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Index] - Auto-set to `Index` __(read-only)__
   * @param {string} [params.assetType] - Type of the Index. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for Index __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Index's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Index
   * @param {string} [params.countryId] - ID of Index's country
   * @param {string} [params.currency] - Index currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Index
   * @param {string} [params.displayName] - Display name of the Index
   * @param {boolean} [params.rollPrice=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Index
   * @param {object} [params.links] - Object of array of Links attached to the Index
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Index. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Index
   * @param {string} [params.updatedBy] - ID of the user that updated the Index
   * @param {date} [params.createdTime] - Time that the Index was created
   * @param {date} [params.updatedTime] - Time that the Index was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    currency,
    issueDate,
    description='',
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
  }) {
    super({
      assetManagerId,
      assetId,
      assetClass: 'Index',
      fungible: true,
      assetIssuerId,
      assetStatus,
      countryId,
      currency,
      issueDate,
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
  }
}

export default Index
