import Asset from '../../Asset/asset'

/**
 * Class representing a Real Asset
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class RealAsset extends Asset {
  /**
   * Construct a new Real Asset instance
   * @param {object} params - RealAsset creation options
   * @param {number} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=RealAsset] - Class of the Asset (a subclass of RealAsset may define its own assetClass)
   * @param {string} [params.assetType] - Type of the Asset. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Real Asset's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Real Asset
   * @param {string} [params.countryId] - ID of Real Asset's country
   * @param {string} [params.venueId] - ID of Real Asset's venue if applicable
   * @param {string} [params.currency] - Real Asset currency (e.g. USD, SGD)
   * @param {string} [params.description] - Description of the Real Asset
   * @param {string} [params.displayName] - Display name of the Asset
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Asset
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.ownership] - Array of objects specifying the split of ownership of the Real Asset (it must sum to 1) (e.g. `[ {partyId: 'ABC', split: 0.3}, {partyId: 'DEF', split: 0.7} ]`
   * @param {object} [params.comments] - Object of Comments attached to the Real Asset
   * @param {object} [params.links] - Object of array of Links attached to the Real Asset
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Real Asset. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Real Asset
   * @param {string} [params.updatedBy] - ID of the user that updated the Real Asset
   * @param {date} [params.createdTime] - Time that the Real Asset was created
   * @param {date} [params.updatedTime] - Time that the Real Asset was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass = 'RealAsset',
    assetIssuerId,
    assetStatus = 'Active',
    countryId,
    venueId,
    currency,
    description = '',
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
      assetClass,
      fungible: false,
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
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
    
    Object.defineProperties(this, {
      _ownership: { writable: true, enumerable: false },
      ownership: {
        get: () => this._ownership,
        set: (newOwnership) => {
          if (newOwnership instanceof Array) {
           var sum=0;
           for (var i = 0; i < newOwnership.length; i++)
           {
                var value=newOwnership[i].split
                var id=newOwnership[i].partyId
                if(id==undefined)
                {
                  throw new Error('PartyId is missing')
                }
                sum+=value         
           }     
          if (sum==1 ) {
            this._ownership = ownership
          } else {
            throw new Error('The sum of split should be 1')
          }
        }else
        {
          throw new Error('ownership should be an array')
        }
        },
        enumerable: true
      }
    })
    this.ownership = ownership
  }
}

export default RealAsset