import Company from '../Company/company.js'

/**
 * Class representing an Exchange
 * @memberof module:parties
 * @extends module:parties.Company
 */
class Exchange extends Company {
  /**
   * Construct a new Exchange instance
   * @param {object} params - Exchange creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Exchange __(required)__
   * @param {string} params.partyId - Party ID of the Exchange __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the Exchange
   * @param {string} [params.baseCurrency] - Base Currency of the Exchange (e.g. SGD, USD)
   * @param {string} [params.description] - Description of the Exchange
   * @param {string} [params.licenseNumber] - Company license number (if applicable)
   * @param {string} [params.licenseType] - Company license type
   * @param {string} [params.assetsUnderManagement] - Value of assets under management
   * @param {string} [params.registrationNumber] - Business registration number (if applicable)
   * @param {string} [params.yearOfIncorporation] - Year of incorporation
   * @param {string} [params.contactNumber] - Contact number
   * @param {object} [params.addresses] - Object of Addresses associated with the Exchange
   * @param {object} [params.emails] - Object of Emails associated with the Exchange
   * @param {object} [params.references] - Object of References associated with the Exchange
   * @param {object} [params.comments] - Object of Comments associated with the Exchange
   * @param {object} [params.links] - Object of Links associated with the Exchange
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party 
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the Exchange
   * @param {string} [params.updatedBy] - ID of the user that updated the Exchange
   * @param {date} [params.createdTime] - Time that the Exchange was created
   * @param {date} [params.updatedTime] - Time that the Exchange was updated
   * @param {number} [params.version] - Version number of the Exchange
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

export default Exchange
