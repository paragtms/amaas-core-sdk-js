import { AMaaSModel } from '../../core'

/**
 * Class representing a Domain
 * @memberof module:assetManagers
 * @extends module:core.AMaaSModel
 */
class Domain extends AMaaSModel {
  /**
   * Construct a new Domain instance
   * @param {object} params - Domain creation options:
   * @param {number} params.assetManagerId - AMID of the Domain object
   * @param {string} params.domain - Domain itself without '@' (e.g. companyX.com)
   * @param {boolean} params.isPrimary - Whether this Domain is primary for the given AMID
   */
  constructor({
    assetManagerId,
    domain,
    isPrimary,
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
    this.isPrimary = isPrimary == false ? false : true
    this.assetManagerId = assetManagerId
    this.domain = domain
  }
}

export default Domain