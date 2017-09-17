import Company from '../Company/company.js'

/**
 * Class representing a Fund
 * @memberof module:parties
 * @extends module:parties.Company
 */
class Fund extends Company {
  /**
   * Construct a new Fund instance
   * @param {object} params - Fund creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Fund __(required)__
   * @param {string} params.partyId - Party ID of the Fund __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the Fund
   * @param {string} [params.baseCurrency] - Base Currency of the Fund (e.g. SGD, USD)
   * @param {string} [params.description] - Description of the Fund
   * @param {string} [params.licenseNumber] - Company license number (if applicable)
   * @param {string} [params.licenseType] - Company license type
   * @param {string} [params.assetsUnderManagement] - Value of assets under management
   * @param {string} [params.registrationNumber] - Business registration number (if applicable)
   * @param {string} [params.yearOfIncorporation] - Year of incorporation
   * @param {string} [params.contactNumber] - Contact number
   * @param {object} [params.addresses] - Object of Addresses associated with the Fund
   * @param {object} [params.emails] - Object of Emails associated with the Fund
   * @param {object} [params.references] - Object of References associated with the Fund
   * @param {object} [params.comments] - Object of Comments associated with the Fund
   * @param {object} [params.links] - Object of Links associated with the Fund
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party 
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the Fund
   * @param {string} [params.updatedBy] - ID of the user that updated the Fund
   * @param {date} [params.createdTime] - Time that the Fund was created
   * @param {date} [params.updatedTime] - Time that the Fund was updated
   * @param {number} [params.version] - Version number of the Fund
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    baseCurrency,
    description='',
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
  }
}

export default Fund
