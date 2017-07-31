import Asset from '../../Asset/asset'

/**
 * Class representing a Sukuk
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class Sukuk extends Asset {
  /**
   * Construct a new Sukuk instance
   * @param {object} params - Sukuk creation options:
   * @param {number} params.assetManagerId - ID of Sukuk's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Sukuk __(required)__
   * @param {string} [params.assetClass=Sukuk] - Class of the Sukuk (a subclass of Sukuk may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Sukuk. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Sukuk's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Sukuk
   * @param {string} [params.countryId] - ID of Sukuk's country
   * @param {string} [params.venueId] - ID of Sukuk's venue if applicable
   * @param {string} [params.currency] - Sukuk currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Sukuk
   * @param {string} [params.displayName] - Display name of the Sukuk
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Sukuk
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Sukuk
   * @param {object} [params.links] - Object of array of Links attached to the Sukuk
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Sukuk. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Sukuk
   * @param {string} [params.updatedBy] - ID of the user that updated the Sukuk
   * @param {date} [params.createdTime] - Time that the Sukuk was created
   * @param {date} [params.updatedTime] - Time that the Sukuk was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Sukuk',
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
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
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

export default Sukuk
