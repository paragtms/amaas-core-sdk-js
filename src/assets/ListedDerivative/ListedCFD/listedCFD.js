import ListedDerivative from '../ListedDerivative/listedDerivative'

/**
 * Class representing a Listed CFD
 * @memberof module:assets
 * @extends module:assets.ListedDerivative
 */
class ListedContractForDifference extends ListedDerivative {
  /**
   * Construct a new Listed CFD instance
   * @param {object} params - ListedContractForDifference creation options:
   * @param {number} params.assetManagerId - ID of Listed CFD's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Listed CFD __(required)__
   * @param {string} [params.assetClass=ListedDerivative] - Auto-set to `ListedDerivative` __(read-only)__
   * @param {string} [params.assetType] - Type of the Listed CFD. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Listed CFD's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Listed CFD
   * @param {string} [params.countryId] - ID of Listed CFD's country
   * @param {string} [params.venueId] - ID of Listed CFD's venue if applicable
   * @param {string} [params.currency] - Listed CFD currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Listed CFD
   * @param {string} [params.displayName] - Display name of the Listed CFD
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Listed CFD
   * @param {object} [params.links] - Object of array of Links attached to the Listed CFD
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Listed CFD. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Listed CFD
   * @param {string} [params.updatedBy] - ID of the user that updated the Listed CFD
   * @param {date} [params.createdTime] - Time that the Listed CFD was created
   * @param {date} [params.updatedTime] - Time that the Listed CFD was updated
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
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
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
      version
    })
  }
}

export default ListedContractForDifference
