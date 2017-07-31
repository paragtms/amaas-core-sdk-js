import Asset from '../Asset/asset'

/**
 * Class representing an Custom Asset
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class CustomAsset extends Asset {
  /**
   * Construct a new Custom Asset instance
   * @param {object} params - CustomAsset creation options:
   * @param {integer} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Asset] - Auto-set to `Asset` __(read-only)__
   * @param {string} [params.assetType] - Type of the Asset. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} params.fungible - Whether this Asset is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the Asset issuer
   * @param {string} [params.assetStatus=Active] - Status of the Asset
   * @param {string} [params.countryId] - ID of Asset's country
   * @param {string} [params.venueId] - ID of Asset's venue if applicable
   * @param {string} [params.currency] - Asset currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Asset
   * @param {string} [params.displayName] - Display name of the Asset
   * @param {boolean} [params.rollPrice] - Whether to roll the price for the Asset
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Asset
   * @param {object} [params.links] - Object of array of Links attached to the Asset
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated
   * @param {object} [params.clientAdditional] - Object of custom properties for creating a Custom Asset (e.g. { size: 'Large', Flavour: 'Lime' })
   * @param {string} [params.createdBy] - ID of the user that created the Asset
   * @param {string} [params.updatedBy] - ID of the user that updated the Asset
   * @param {date} [params.createdTime] - Time that the Asset was created
   * @param {date} [params.updatedTime] - Time that the Asset was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Asset',
    fungible,
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
    version,
    ...clientAdditional
  }) {
    super({
      assetManagerId,
      assetId,
      assetClass: 'Asset',
      fungible,
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
      clientAdditional,
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
    Object.assign(this, { ...clientAdditional })
  }
}

export default CustomAsset
