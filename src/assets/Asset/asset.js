import isEmpty from 'lodash/isEmpty'

import { AMaaSModel } from '../../core'
import { Comment, Reference } from '../../children'
import AssetLink from '../../children/Link/AssetLink'

/**
 * Class representing an Asset
 * @memberof module:assets
 * @extends module:core.AMaaSModel
 */
class Asset extends AMaaSModel {
  /**
   * Construct a new Asset instance
   * @param {object} params - Asset creation options:
   * @param {number} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Asset] - Class of the Asset
   * @param {string} [params.assetType] - Type of the Asset. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} params.fungible - Whether this Asset is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the Asset issuer
   * @param {string} [params.assetStatus=Active] - Status of the Asset
   * @param {string} [params.countryId] - ID of Asset's country
   * @param {string} [params.venueId] - ID of Asset's venue if applicable
   * @param {string} [params.currency] - Asset currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Asset
   * @param {string} [params.displayName] - Display name of the Asset
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Asset
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Asset
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
    assetClass = 'Asset',
    fungible,
    assetIssuerId,
    assetStatus = 'Active',
    countryId,
    venueId,
    currency,
    issueDate,
    description = '',
    displayName = '',
    rollPrice = true,
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
        set: newIssueDate => {
          // Accepts string 'YYYY-MM-DD'
          if (newIssueDate) {
            this._issueDate = newIssueDate
          } else {
            this._issueDate = '0001-01-01'
          }
        },
        enumerable: true
      },
      _comments: { writable: true, enumerable: false },
      comments: {
        get: () => this._comments,
        set: newComments => {
          if (newComments) {
            let commentsClass = {}
            for (let name in newComments) {
              if (newComments.hasOwnProperty(name)) {
                commentsClass[name] = new Comment(newComments[name])
              }
            }
            this._comments = commentsClass
          } else {
            this._comments = {}
          }
        },
        enumerable: true
      },
      _links: { writable: true, enumerable: false },
      links: {
        get: () => this._links,
        set: newLinks => {
          if (newLinks) {
            let linksClass = {}
            for (let name in newLinks) {
              if (newLinks.hasOwnProperty(name)) {
                // TODO: Remove this when the API returns Arrays for all Links
                if (newLinks[name] instanceof Array) {
                  linksClass[name] = newLinks[name].map(link => {
                    return new AssetLink(link)
                  })
                } else {
                  console.warn(
                    'All Links should be Arrays: if you are seeing this message then a non-Array link has been encountered and it will be skipped for now'
                  )
                }
              }
            }
            this._links = linksClass
          } else {
            this._links = {}
          }
        },
        enumerable: true
      },
      _references: { writable: true, enumerable: false },
      references: {
        get: () => this._references,
        set: newReferences => {
          if (newReferences && !isEmpty(newReferences)) {
            let refClass = {}
            let primaryCount = 0
            for (let name in newReferences) {
              if (newReferences.hasOwnProperty(name)) {
                refClass[name] = new Reference(newReferences[name])
              }
              if (newReferences[name].referencePrimary) primaryCount++
            }
            if (primaryCount !== 1)
              throw new Error(
                `Exactly 1 primary Reference must be supplied - found: ${primaryCount}`
              )
            this._references = refClass
          } else {
            this._references = {}
          }
        },
        enumerable: true
      }
    })

    this.assetManagerId = assetManagerId
    this.assetId = assetId
    this.assetClass = assetClass
    this.assetType = this.constructor.name
    this.assetTypeDisplay = this.constructor.name
      .replace(/([A-Z])/g, ' $1')
      .trim()
    this.fungible = fungible
    this.assetIssuerId = assetIssuerId
    this.assetStatus = assetStatus
    this.countryId = countryId
    this.venueId = venueId
    this.currency = currency
    this.issueDate = issueDate
    this.description = description
    this.displayName = displayName
    this.rollPrice = rollPrice
    this.clientId = clientId
    this.comments = comments
    this.links = links
    this.references = references
  }
}

export default Asset
