import RealAsset from '../RealAsset/realAsset'

/**
 * Class representing Wine
 * @memberof module:assets
 * @extends module:assets.RealAsset
 */
class Wine extends RealAsset {
  /**
   * Construct a new Wine instance
   * @param {object} params - Wine creation options:
   * @param {number} params.assetManagerId - ID of Wine's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Wine __(required)__
   * @param {string} [params.assetClass=RealAsset] - Auto-set to `RealAsset` __(read-only)__
   * @param {string} [params.assetType] - Type of the Wine. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Wine's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Wine
   * @param {string} [params.countryId] - ID of Wine's country
   * @param {string} [params.venueId] - ID of Wine's venue if applicable
   * @param {string} [params.currency] - Wine currency (e.g. USD, SGD)
   * @param {string} [params.description] - Description of the Wine
   * @param {string} [params.displayName] - Display name of the Wine
   * @param {string} [params.clientId] - ID of the associated client

   * @param {string} [params.year] - Year of production
   * @param {string} [params.producer] - Name of the producer
   * @param {string} [params.region] - Region
   * @param {string} [params.appellation] - Appellation
   * @param {string} [params.classification] - Classification
   * @param {string} [params.color] - Color (e.g. red, white)
   * @param {string} [params.bottleSize] - Bottle size (e.g. Magnum)
   * @param {string} [params.bottleInCellar] - ???
   * @param {string} [params.bottleLocation] - Location of the bottle
   * @param {string} [params.storageCost] - Storage cost of the Wine
   * @param {string} [params.ratingType] - Rating Type
   * @param {string} [params.ratingValue] - Rating Value
   * @param {string} [params.packingType] - Packing Type
   * @param {string} [params.toDrinkStart] - Earliest date it is suitable to begin drinking (YYYY-MM-DD)
   * @param {string} [params.toDrinkEnd] - Latest date to drink (YYYY-MM-DD)

   * @param {object} [params.comments] - Object of Comments attached to the Wine
   * @param {object} [params.links] - Object of array of Links attached to the Wine
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Wine. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Wine
   * @param {string} [params.updatedBy] - ID of the user that updated the Wine
   * @param {date} [params.createdTime] - Time that the Wine created
   * @param {date} [params.updatedTime] - Time that the Wine was updated
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
    clientId,

    year,
    producer,
    region,
    appellation,
    classification,
    color,
    bottleSize,
    bottleInCellar,
    bottleLocation,
    storageCost,
    ratingType,
    ratingValue,
    packingType,
    toDrinkStart,
    toDrinkEnd,

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
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
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
      version, 
      ownership
    })
    this.year = year
    this.producer = producer
    this.region = region
    this.appellation = appellation
    this.classification = classification
    this.color = color
    this.bottleSize = bottleSize
    this.bottleInCellar = bottleInCellar
    this.bottleLocation = bottleLocation
    this.storageCost = storageCost
    this.ratingType = ratingType
    this.ratingValue = ratingValue
    this.packingType = packingType
    this.toDrinkStart = toDrinkStart
    this.toDrinkEnd = toDrinkEnd
  }
}

export default Wine
