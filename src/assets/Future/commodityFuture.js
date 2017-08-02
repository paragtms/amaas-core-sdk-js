import { AMaaSModel } from '../../core'
import { Reference } from '../../children'
import AssetLink from '../../children/Link/AssetLink'
/**
 * Class representing an Asset
 * @memberof module:commodityFutures
 * @extends module:core.AMaaSModel
 */
class CommodityFuture extends AMaaSModel {
      /**
   * Construct a new Asset instance
   * @param {object} params - Asset creation options:
   * @param {number} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} params.settlementType - A type of settlement
   * @param {number} params.contractSize - An integer, e.g. 10 barrels per contract
   * @param {string} params.pointValue - Value of 1 point
   * @param {number} params.tickSize - The minimum unit of price change
   * @param {number} params.quoteUnit - Contract unit, e.g. barrel 
   * @param {string} [params.assetIssuerId] - ID of the Asset issuer
   * @param {string} [params.assetStatus=Active] - Status of the Asset
   * @param {string} [params.countryId] - ID of Asset's country
   * @param {string} [params.venueId] - ID of Asset's venue if applicable
   * @param {string} [params.currency] - Asset currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate] - Expiry date 
   * @param {string} [params.description] - Description of the Asset
   * @param {string} [params.displayName] - Display name of the Asset
   * @param {object} [params.links] - Object of array of Links attached to the Asset
   * @param {object} [params.references={}] - Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Asset
   * @param {string} [params.updatedBy] - ID of the user that updated the Asset
   * @param {date} [params.createdTime] - Time that the Asset was created
   * @param {date} [params.updatedTime] - Time that the Asset was updated
   * @param {number} [params.version] - Version number
   */
  constructor({
    assetManagerId,
    assetId,
    settlementType,
    contractSize,
    pointValue,
    tickSize,
    quoteUnit,
    assetIssuerId,
    assetStatus,
    countryId,
    venueId,
    currency,
    issueDate,
    expiryDate,
    description,
    displayName,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
      super({
          createdBy,
          updatedBy,
          createdTime,
          updatedTime,
          version
      })

      Object.defineProperties(this, {
        _issueDate: { writable: true, enumerable: false },
        issueDate: {
             get: () => this._issueDate,
             set: (newIssueDate) => {
                 // Accepts string 'YYYY-MM-DD'
                 if (newIssueDate) {
                     this._issueDate = newIssueDate
                 } else {
                     this._issueDate = '0001-01-01'
                 }
        },
        enumerable: true
         },
          _links: { writable: true, enumerable: false },
          links: {
              get: () => this._links,
              set: (newLinks) => {
                  if(newLinks) {
                      let linksClass = {}
                      for (let name in newLinks) {
                          if(newLinks.hasOwnProperty(name)) {
                              //TODO: Remove this when the API returns Arrays for all Links
                              if (newLinks[name] instanceof Array) {
                                  linksClass[name] = newLinks[name].map(link => {
                                      return new AssetLink(link)
                                  })
                              } else {
                                  console.warn('All Links should be Arrays: if you are seeing this message then a non-Array link has been encountered and it will be skipped for now')
                              }
                          }
                      }
                      this._links = linksClass
                  } else {
                      this._links = {}
                  }
              }
          },
          _references: {writable: true, eumerable: false},
          references: {
              get: () => this._references,
              set: (newReferences) => {
                  if (newReferences) {
                      let refClass= {}
                      for (let name in newReferences) {
                          if (newReferences.hasOwnProperty(name)) {
                              refClass[name] = new Reference(newReferences[name])
                          }
                      }
                      this._references = refClass
                  } else {
                      this._references = {}
                  }
              }, enumerable: true
          }
      })

      this.assetManagerId = assetManagerId
      this.assetId = assetId
      this.settlementType = settlementType
      this.contractSize = contractSize
      this.pointValue = pointValue
      this.tickSize = tickSize
      this.quoteUnit = quoteUnit
      this.assetIssuerId = assetIssuerId
      this.assetStatus = assetStatus
      this.displayName = displayName
      this.currency = currency
      this.issueDate = issueDate
      this.description = description
      this.countryId = countryId
      this.venueId = venueId
      this.links = links
      this.references = references
      this.expiryDate = expiryDate
  }
}

export default CommodityFuture