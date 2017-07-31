import Decimal from 'decimal.js'
import Asset from '../../Asset/asset.js'

/**
 * Class representing an Derivative
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class Derivative extends Asset {
  /**
   * Construct a new Derivative instance
   * @param {object} params - Derivative creation options:
   * @param {integer} params.assetManagerId - ID of Derivative's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Derivative __(required)__
   * @param {string} [params.assetClass=Derivative] - Class of the Derivative (a subclass of Derivative may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Derivative. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` for Derivative __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Derivative's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Derivative
   * @param {string} [params.countryId] - ID of Derivative's country
   * @param {string} [params.venueId] - ID of Derivative's venue if applicable
   * @param {string} params.currency - Derivative currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Derivative
   * @param {string} [params.displayName] - Display name of the Derivative
   * @param {boolean} [params.rollPrice=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Derivative
   * @param {object} [params.links] - Object of array of Links attached to the Derivative
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Derivative. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Derivative
   * @param {string} [params.updatedBy] - ID of the user that updated the Derivative
   * @param {date} [params.createdTime] - Time that the Derivative was created
   * @param {date} [params.updatedTime] - Time that the Derivative was updated
   * @param {number} [params.version] - Version number of the Derivative
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Derivative',
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
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
      fungible: false,
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

export default Derivative
