import Derivative from '../Derivative/derivative'

/**
 * Class representing a CFD
 * @memberof module:assets
 * @extends module:assets.Derivative
 */
class ContractForDifference extends Derivative {
  /**
   * Construct a new CFD instance
   * @param {object} params - CFD creation options:
   * @param {number} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Derivative] - Auto-set to `Derivative` __(read-only)__
   * @param {string} [params.assetType] - Type of the CFD. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=false] - Auto-set to `false` for Derivative and its subclasses __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the CFD issuer
   * @param {string} [params.assetStatus=Active] - Status of the CFD
   * @param {string} [params.countryId] - ID of CFD's country
   * @param {string} [params.venueId] - ID of CFD's venue
   * @param {string} [params.currency] - CFD currency (e.g. USD, SGD)
   * @param {string} [params.issueDate] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the CFD
   * @param {string} [params.displayName] - Display name of the CFD
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the CFD
   * @param {object} [params.links] - Object of array of Links attached to the CFD
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the CFD. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the CFD
   * @param {string} [params.updatedBy] - ID of the user that updated the CFD
   * @param {date} [params.createdTime] - Time that the CFD was created
   * @param {date} [params.updatedTime] - Time that the CFD was updated
   * @param {number} [params.version] - Version number of the CFD
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
      assetClass: 'Derivative',
      fungible: false,
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
export default ContractForDifference
