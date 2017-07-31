import Asset from '../../Asset/asset'

/**
 * Class representing a Listed Derivative
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class ListedDerivative extends Asset {
  /**
   * Construct a new Listed Derivative instance
   * @param {object} params - ListedDerivative creation options:
   * @param {number} params.assetManagerId - ID of Listed Derivative's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Listed Derivative __(required)__
   * @param {string} [params.assetClass=ListedDerivative] - Class of the Listed Derivative (a subclass may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Listed Derivative. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Listed Derivative's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Listed Derivative
   * @param {string} [params.countryId] - ID of Listed Derivative's country
   * @param {string} [params.venueId] - ID of Listed Derivative's venue if applicable
   * @param {string} [params.currency] - Listed Derivative currency (e.g. USD, SGD)
   * @param {string} [params.issueDate] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Listed Derivative
   * @param {string} [params.displayName] - Display name of the Listed Derivative
   * @param {boolean} [params.rollPrice=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Listed Derivative
   * @param {object} [params.links] - Object of array of Links attached to the Listed Derivative
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Listed Derivative. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Listed Derivative
   * @param {string} [params.updatedBy] - ID of the user that updated the Listed Derivative
   * @param {date} [params.createdTime] - Time that the Listed Derivative was created
   * @param {date} [params.updatedTime] - Time that the Listed Derivative was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='ListedDerivative',
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
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
      assetClass,
      fungible: true,
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
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

export default ListedDerivative
