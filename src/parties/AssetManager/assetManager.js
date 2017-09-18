import Company from '../Company/company'

/**
 * Class representing an Asset Manager
 * @memberof module:parties
 * @extends module:parties.Company
 */
class AssetManager extends Company {
  /**
   * Construct a new Asset Manager instance
   * @param {object} params - Asset Manager creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Asset Manager
   * @param {string} params.partyId - Party ID of the Asset Manager
   * @param {string} params.partyStatus=Active - Status of the Asset Manager (e.g. 'Active')
   * @param {string} params.baseCurrency - Base Currency of the Asset Manager (e.g. SGD, USD)
   * @param {string} params.description - Description of the Asset Manager
   * @param {string} [params.licenseNumber] - Company license number (if applicable)
   * @param {string} [params.licenseType] - Company license type
   * @param {string} [params.assetsUnderManagement] - Value of assets under management
   * @param {string} [params.registrationNumber] - Business registration number (if applicable)
   * @param {string} [params.yearOfIncorporation] - Year of incorporation
   * @param {string} [params.contactNumber] - Contact number
   * @param {object} params.addresses - Object of Addresses associated with this Asset Manager
   * @param {object} params.emails - Object of Emails associated with this Asset Manager
   * @param {object} params.references - Object of References associated with this Asset Manager
   * @param {object} params.comments - Object of Comments associated with the Asset Manager
   * @param {object} params.links - Object of Links associated with the Asset Manager
   * @param {string} params.legalName- Legal name of the Asset Manager associated with this party 
   * @param {string} params.displayName - Display name of the Asset Manager associated with this party 
   * @param {string} params.url - Url of this Party
   * @param {string} params.createdBy - ID of the user that created the Asset Manager
   * @param {string} params.updatedBy - ID of the user that updated the Asset Manager
   * @param {date} params.createdTime - Time that the Asset Manager was created
   * @param {date} params.updatedTime - Time that the Asset Manager was updated
   * @param {number} params.version - Version number of the Asset Manager
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    baseCurrency,
    description='',
    licenseNumber,
    licenseType,
    assetsUnderManagement,
    registrationNumber,
    yearOfIncorporation,
    contactNumber,
    addresses={},
    emails={},
    references={},
    comments={},
    links={},
    legalName,
    displayName,
    url,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      partyId,
      partyStatus,
      baseCurrency,
      description,
      yearOfIncorporation,
      contactNumber,
      addresses,
      emails,
      references,
      comments,
      links,
      legalName,
      displayName,
      url,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.licenseNumber = licenseNumber
    this.licenseType = licenseType
    this.assetsUnderManagement = assetsUnderManagement
    this.registrationNumber = registrationNumber
  }
}

export default AssetManager
